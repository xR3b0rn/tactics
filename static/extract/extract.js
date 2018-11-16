'use strict';

const path = require('path');
const vm = require('vm');
const fs = require('fs');
const assert = require('assert');

const JSDOM = require('jsdom').JSDOM;
const CanvasGradient = require('canvas').CanvasGradient;
const CanvasPattern = require('canvas').CanvasPattern;
const Image = require('canvas').Image;

var html_file;
var file_prefix;

if (process.argv.length === 3) {
  html_file = process.argv[2];

  if (/\.html$/.test(html_file)) {
    file_prefix = html_file.replace(/\.html$/, '');
  }
  else {
    throw new Error("The HTML file is expected to end in '.html'");
  }
}
else {
  throw new Error('Expected one argument to indicate the HTML file to parse.');
}

var canvas_js;
var extracted = {
  width: null,
  height: null,
  images: [],
  frames: [],
};
var transcript = {
  images: [],
  setup: [],
  frames: [],
};
var frame_count = null;

var html = fs.readFileSync(html_file);
var dom = new JSDOM(html);
var scripts = [];

Array.from(dom.window.document.scripts).forEach(script => {
  if (script.src) {
    if (!(/^https?:/.test(script.src))) {
      let src = path.resolve(path.relative(path.dirname(html_file), script.src));
      scripts.push(fs.readFileSync(src));
    }
  }
  else {
    scripts.push(script.innerHTML);
  }
});

// Inject a little bit of JavaScript to extract the frame count.
scripts.push("window.postMessage({type:'frame_count',value:frames.length});");

/*
 * Calls to setTimeout() or setInterval() are intercepted to detect frame changes.
 */
var mock_timeout = (callback, timeout) => {
  let id = setTimeout(() => {
    if (extracted.frames.length === frame_count) {
      clearTimeout(id);
      return export_extracted();
    }

    transcript.frames.push([]);
    extracted.frames.push([]);

    callback();
  }, 1);

  return id;
};

var mock_interval = (callback, interval) => {
  let id = setInterval(() => {
    if (extracted.frames.length === frame_count) {
      clearInterval(id);
      return export_extracted();
    }

    transcript.frames.push([]);
    extracted.frames.push([]);

    callback();
  }, 1);

  return id;
};

vm.runInNewContext(scripts.join(';'), {
  window: mock_window(dom),
  document: mock_document(dom),
  Image: Image,
  setTimeout: mock_timeout,
}, 'vm.js');

function makeMockObject(id, handler) {
  handler.__proxy__ = id;

  return new Proxy(handler, {
    get: (target, prop, receiver) => {
      var descriptor = Object.getOwnPropertyDescriptor(target, prop)

      if (descriptor && ('value' in descriptor || descriptor.get)) {
        return target[prop];
      }
      else if (prop === '__proto__')
        return target.__proto__;

      throw new Error("Need to 'get' '"+id+"."+prop+"'");
    },
    set: (target, prop, value, receiver) => {
      var descriptor = Object.getOwnPropertyDescriptor(target, prop);

      if (descriptor && ('value' in descriptor || descriptor.set)) {
        return target[prop] = value;
      }
      else if (prop === '__proto__')
        return target.__proto__ = value;

      throw new Error("Need to 'set' '"+id+"."+prop+" = "+typeof(value)+"'");
    },
    getPrototypeOf: () => {
      if ('getPrototypeOf' in handler)
        return handler.getPrototypeOf();

      throw new Error("Unhandled operation on '"+id+"'");
    },
    setPrototypeOf: () => { throw new Error("Unhandled operation on '"+id+"'") },
    isExtensible: () => { throw new Error("Unhandled operation on '"+id+"'") },
    preventExtensions: () => { throw new Error("Unhandled operation on '"+id+"'") },
    getOwnPropertyDescriptor: () => { throw new Error("Unhandled operation on '"+id+"'") },
    defineProperty: () => { throw new Error("Unhandled operation on '"+id+"'") },
    has: () => { throw new Error("Unhandled operation on '"+id+"'") },
    deleteProperty: () => { throw new Error("Unhandled operation on '"+id+"'") },
    ownKeys: () => { throw new Error("Unhandled operation on '"+id+"'") },
    apply: () => { throw new Error("Unhandled operation on '"+id+"'") },
    construct: () => { throw new Error("Unhandled operation on '"+id+"'") },
  });
}

function mock_window() {
  return makeMockObject('window', {
    addEventListener: (type, callback) => {
      if (type === 'load') {
        callback(makeMockObject("window load event", {}));
        return makeMockObject("window.addEventListener('load', ...)", {});
      }
      console.log('window.addEventListener', type, callback);
      return makeMockObject("window.addEventListener('load', ...)", {});
    },
    setInterval: mock_interval,
    setTimeout: mock_timeout,
    postMessage: (message, targetOrigin, transfer) => {
      if (message.type === 'frame_count')
        frame_count = message.value;
      else
        console.log('message', message);
    },
  });
}

function mock_document(dom) {
  return makeMockObject('document', {
    get body() {
      return dom.window.document.body;
    },
    getElementById: id => {
      var element = dom.window.document.getElementById(id);
      if (element.tagName === 'CANVAS') {
        transcript.canvasId = id;

        return makeMockObject('#myCanvas', {
          get width() {
            return element.width;
          },
          get height() {
            return element.height;
          },
          getContext: () => mock_canvas_context(dom, element, 'context'),
        });
      }
      //console.log("document.getElementById('"+id+"')");
      return dom.window.document.getElementById(id);
    },
    createElement: tagName => {
      if (tagName === 'img')
        return dom.window.document.createElement(tagName);
      if (tagName === 'canvas')
        return dom.window.document.createElement(tagName);

      throw new Error('Unsupported createElement: '+tagName);
    },
  });
}

function mock_canvas_context(dom, canvas, id) {
  var context = canvas.getContext("2d");
  var mock = {};
  var imageId = 0;
  var patternId = 0;
  var gradientId = 0;

  mock.__proto__ = makeMockObject(id, {
    _stack: [],
    _transform: [1, 0, 0, 1, 0, 0],

    beginPath: () => {
      print_transcript('%s.beginPath();', id);
      context.beginPath();
    },
    moveTo: (x, y) => {
      print_transcript('%s.moveTo(%s, %s);', id, x, y);
      context.moveTo(x, y);
    },
    lineTo: (x, y) => {
      print_transcript('%s.lineTo(%s, %s);', id, x, y);
      context.lineTo(x, y);
    },
    clip: (a, b) => {
      if (a !== undefined && b !== undefined)
        print_transcript('%s.clip(%s, %s);', id, a, b);
      else if (a !== undefined)
        print_transcript('%s.clip(%s);', id, a);
      else
        print_transcript('%s.clip();', id);
      context.clip(a, b);
    },
    quadraticCurveTo: (cpx, cpy, x, y) => {
      print_transcript('%s.quadraticCurveTo(%s, %s, %s, %s);', id, cpx, cpy, x, y);
      context.quadraticCurveTo(cpx, cpy, x, y);
    },

    transform: function (sx, rx, ry, sy, tx, ty) {
      print_transcript('%s.transform(%s, %s, %s, %s, %s, %s);', id, sx, rx, ry, sy, tx, ty);
      this._transform = multiply_transform([sx, rx, ry, sy, tx, ty], this._transform);
    },
    createPattern: function (image, repetition) {
      let pattern = context.createPattern(image, repetition);
      pattern._image = image;

      if (image instanceof Image) {
        transcript.images.push({id: imageId, src: image.src});
        print_transcript("let pattern%s = %s.createPattern(image%s, '%s');", patternId, id, imageId, repetition);

        pattern._id = 'pattern'+patternId;
        imageId++;
        patternId++;
      }
      else {
        print_transcript('// Warning: The following line may be malformed');
        print_transcript('%s.createPattern(%s, %s);', id, image, repetition);
      }

      return pattern;
    },
    createRadialGradient: function (x0, y0, r0, x1, y1, r1) {
      let gradient = makeMockObject('gradient', {
        _id: 'gradient'+gradientId,
        _gradient: context.createRadialGradient(x0, y0, r0, x1, y1, r1),

        getPrototypeOf: function () {
          return Object.getPrototypeOf(this._gradient);
        },
        addColorStop: function (offset, color) {
          this._gradient.addColorStop(offset, color);

          print_transcript("%s.addColorStop(%s, '%s');", this._id, offset, color);
        },
      });

      print_transcript('let %s = %s.createRadialGradient(%s, %s, %s, %s, %s, %s);', gradient._id, id, x0, y0, r0, x1, y1, r1);

      gradientId++;

      return gradient;
    },
    set fillStyle(value) {
      if (typeof value === 'string')
        print_transcript("%s.fillStyle = '%s';", id, value);
      else if (value instanceof CanvasPattern)
        print_transcript('%s.fillStyle = %s;', id, value._id);
      else if (value instanceof CanvasGradient)
        print_transcript('%s.fillStyle = %s;', id, value._id);
      else {
        print_transcript('// Warning: The following line may be malformed');
        print_transcript("%s.fillStyle = %s;", id, value);
      }

      return this._fillStyle = value;
    },

    fill: () => {
      print_transcript('%s.fill();', id);
    },
    fillRect: function (x, y, width, height) {
      print_transcript('%s.fillRect(%s, %s, %s, %s);', id, x, y, width, height);

      if (x === 0) {
        extracted.width = width;
        extracted.height = height;
      }
      else {
        let frame = extracted.frames[extracted.frames.length-1];
        var transform = [1, 0, 0, 1, 0, 0];
        var current_item = {
          transform: this._transform,
        };

        [...this._stack, current_item].forEach(item => {
          transform = multiply_transform(item.transform, transform);
        });

        // Adjust the transform to round the scaling to 2 decimal places.
        var sx = Math.abs(1 / transform[0]);
        var sy = Math.abs(1 / transform[3]);
        transform = multiply_transform([sx, 0, 0, sy, 0, 0], transform);

        // Only so much precision matters
        transform[0] = transform[0].toFixed(2) * 1;
        transform[3] = transform[3].toFixed(2) * 1;
        transform[4] = transform[4].toFixed(0) * 1;
        transform[5] = transform[5].toFixed(0) * 1;

        var shape = {};
        var fillStyle = this._fillStyle;

        if (typeof(fillStyle) === 'object') {
          if (fillStyle instanceof CanvasPattern) {
            let src = fillStyle._image.src;
            let index = extracted.images.indexOf(src);

            if (index === -1) {
              extracted.images.push(src);
              shape.i = extracted.images.length-1;
            }
            else {
              shape.i = index;
            }

            if ('color' in fillStyle) {
              let color = fillStyle.color;

              if (color.g_mult === 0 && color.b_mult === 0) {
                color.g_mult = 255;
                color.b_mult = 255;
                if (color.isEmpty())
                  shape.trim = true;
                else {
                  color.g_mult = 0;
                  color.b_mult = 0;
                }
              }

              if (!(color.isEmpty())) {
                shape.color = {};
                if (color.r_add !== 0)    shape.color.ra = color.r_add;
                if (color.g_add !== 0)    shape.color.ga = color.g_add;
                if (color.b_add !== 0)    shape.color.ba = color.b_add;
                if (color.a_add !== 0)    shape.color.aa = color.a_add;
                if (color.r_mult !== 255) shape.color.ra = color.r_mult;
                if (color.g_mult !== 255) shape.color.ga = color.g_mult;
                if (color.b_mult !== 255) shape.color.ba = color.b_mult;
                if (color.a_mult !== 255) shape.color.aa = color.a_mult;
              }
            }
          }
          else if (fillStyle instanceof CanvasGradient) {
            // todo
          }
          else if (fillStyle instanceof dom.window.HTMLElement) {
            if (fillStyle.tagName === 'CANVAS') {
              throw new Error('Unsupported fillStyle Canvas');
            }
            else
              throw new Error('Unsupported fillStyle Element');
          }
          else
            throw new Error('Unsupported fillStyle');
        }
        else {
          throw new Error('Unsupported fillStyle');
        }

        if (transform[0] === transform[3]) {
          if (transform[0] !== 1)
            shape.s = transform[0];
        }
        else {
          if (transform[0] !== 1)
            shape.sx = transform[0];
          if (transform[3] !== 1)
            shape.sy = transform[3];
        }

        if (transform[1] === transform[2]) {
          if (transform[1] !== 0)
            shape.r = transform[1];
        }
        else {
          if (transform[1] !== 0)
            shape.rx = transform[1];
          if (transform[2] !== 0)
            shape.ry = transform[2];
        }

        if (transform[4] !== 0)
          shape.x = transform[4];
        if (transform[5] !== 0)
          shape.y = transform[5];

        frame.push(shape);
      }
    },

    save: function () {
      print_transcript('%s.save();', id);
      this._stack.push({
        transform: this._transform,
      });
      this._transform = [1, 0, 0, 1, 0, 0];
    },
    restore: function () {
      print_transcript('%s.restore();', id);
      var item = this._stack.pop();
      this._transform = item.transform;
    },

    // Additional properties defined by canvas.js
    set _matrix(value) {
      //console.log(id, 'set', '_matrix', value);
      return this.__matrix = value;
    },

    get _savedMatrices() {
      return this.__savedMatrices;
    },
    set _savedMatrices(value) {
      //console.log(id, 'set', '_savedMatrices', value);
      return this.__savedMatrices = value;
    },
  });

  return mock;
}

function multiply_transform(m1, m2) {
  var result = [1, 0, 0, 1, 0, 0];
  var sx = 0; // Horizontal Scale
  var rx = 1; // Horizontal Rotate/Skew
  var ry = 2; // Vertical Rotate/Skew
  var sy = 3; // Vertical Scale
  var tx = 4; // Horizontal Translation
  var ty = 5; // Vertical Translation

  result[sx] = m2[sx] * m1[sx] + m2[ry] * m1[rx];
  result[rx] = m2[rx] * m1[sx] + m2[sy] * m1[rx];
  result[ry] = m2[sx] * m1[ry] + m2[ry] * m1[sy];
  result[sy] = m2[rx] * m1[ry] + m2[sy] * m1[sy];
  result[tx] = m2[sx] * m1[tx] + m2[ry] * m1[ty] + m2[tx];
  result[ty] = m2[rx] * m1[tx] + m2[sy] * m1[ty] + m2[ty];

  return result;
}

function export_extracted() {
  fs.writeFileSync('animations/'+file_prefix+'.min.json', JSON.stringify(extracted));
  console.log('Wrote animations/'+file_prefix+'.min.json');
  fs.writeFileSync('animations/'+file_prefix+'.json', JSON.stringify(extracted, null, 2));
  console.log('Wrote animations/'+file_prefix+'.json');

  // Build transcript
  let js = '';

  if (transcript.images.length)
    js = transcript.images.map(image => {
      return [
        'let image'+image.id+' = new Image();',
        'image'+image.id+".src = '"+image.src+"';",
      ].join('\n');
    }).join('\n')+'\n\n';

  js += "canvas = document.getElementById('"+transcript.canvasId+"');\n";
  js += 'originalWidth = canvas.width;\n';
  js += 'originalHeight = canvas.height;\n';
  js += "context = canvas.getContext('2d');\n";

  if (transcript.setup.length)
    js += transcript.setup.join('\n')+'\n\n';
  else
    js += '\n';

  js += 'let frame_index = 0;\n';
  js += 'function drawFrame() {\n';
  js += '  frame_index = frame_index === '+(transcript.frames.length-1)+' ? 0 : frame_index + 1;\n\n';
  js += '  switch (frame_index) {\n';

  js += transcript.frames.map((frame, i) => {
    return [
      '  case '+i+':',
      frame.map(line => '    '+line).join('\n'),
      '    break;',
    ].join('\n');
  }).join('\n')+'\n';

  js += '  }\n';
  js += '}\n\n';

  js += 'setInterval(drawFrame, 83);\n';

  fs.writeFileSync('animations/'+file_prefix+'.js', js);
  console.log('Wrote animations/'+file_prefix+'.js');
}

function print_transcript() {
  let args = [...arguments];
  let format = args.shift();
  args.forEach(arg => {
    format = format.replace('%s', arg);
  });

  if (transcript.frames.length)
    transcript.frames[transcript.frames.length-1].push(format);
  else
    transcript.setup.push(format);
}
