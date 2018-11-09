'use strict';

const vm = require('vm');
const htmlparser = require('htmlparser');
const fs = require('fs');
const assert = require('assert');

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
var frame_count = null;

fs.readFile('canvas.js', 'utf8', (err, data) => {
  if (err) throw err;

  canvas_js = data;
});

fs.readFile('cleric.html', 'utf8', (err, data) => {
  if (err) throw err;

  var handler = new htmlparser.DefaultHandler((error, dom) => {
    if (error) throw error;
  });
  var parser = new htmlparser.Parser(handler);
  parser.parseComplete(data);

  var js = handler.dom[2].children[2].children[3].children[0].raw;
  var post = "window.postMessage({type:'frame_count',value:frames.length});";

  vm.runInNewContext(canvas_js+';'+js+';'+post, {
    window: mock_window(),
    document: mock_document(handler.dom),
  }, 'vm.js');
});

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
    getPrototypeOf: () => { throw new Error('Unhandled operation') },
    setPrototypeOf: () => { throw new Error('Unhandled operation') },
    isExtensible: () => { throw new Error('Unhandled operation') },
    preventExtensions: () => { throw new Error('Unhandled operation') },
    getOwnPropertyDescriptor: () => { throw new Error('Unhandled operation') },
    defineProperty: () => { throw new Error('Unhandled operation') },
    has: () => { throw new Error('Unhandled operation') },
    deleteProperty: () => { throw new Error('Unhandled operation') },
    ownKeys: () => { throw new Error('Unhandled operation') },
    apply: () => { throw new Error('Unhandled operation') },
    construct: () => { throw new Error('Unhandled operation') },
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
    setInterval: (callback, interval) => {
      var id = setInterval(() => {
        if (extracted.frames.length === frame_count) {
          clearInterval(id);
          return export_extracted();
        }

        callback();
      }, interval);

      return id;
    },
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
    getElementById: id => {
      if (id === 'myCanvas') {
        var element = dom[2].children[2].children[1].children[0];

        return makeMockObject('#myCanvas', {
          get width() {
            return parseInt(element.attribs.width);
          },
          get height() {
            return parseInt(element.attribs.height);
          },
          getContext: () => mock_canvas_context('#myCanvas.context'),
        });
      }
      else if (id === 'width_size') {
        var element = dom[2].children[2].children[1].children[1];
        return makeMockObject('#width_size', {
          addEventListener: (type, callback) => {
            //console.log('#width_size.addEventListener', type, callback);
            return makeMockObject("#width_size.addEventListener('load', ...)", {});
          },
        });
      }
      else if (id === 'height_size') {
        var element = dom[2].children[2].children[1].children[1];
        return makeMockObject('#height_size', {
          addEventListener: (type, callback) => {
            //console.log('#height_size.addEventListener', type, callback);
            return makeMockObject("#height_size.addEventListener('load', ...)", {});
          },
        });
      }

      throw new Error("document.getElementById('"+id+"')");
    },
    createElement: tagName => {
      if (tagName === 'img') {
        return makeMockObject("document.createElement('img')", {
          get src() {
            return this._src;
          },
          set src(value) {
            assert(extracted.images.indexOf(value) === -1);
            extracted.images.push(value);

            //console.log("document.createElement('img')", 'set', prop, value);
            return this._src = value;
          },
        });
      }
      console.log('document.createElement', tagName);
      return makeMockObject("document.createElement('"+tagName+"')", {});
    },
  });
}

function mock_canvas_context(id) {
  // Core context prototype
  var context = {};
  
  context.__proto__ = makeMockObject(id, {
    _stack: [],
    _transform: [1, 0, 0, 1, 0, 0],

    beginPath: () => {
      //console.log(id, 'beginPath');
    },
    moveTo: (x, y) => {
      //console.log(id, 'moveTo', x, y);
    },
    lineTo: (x, y) => {
      //console.log(id, 'lineTo', x, y);
    },
    clip: (a, b) => {
      /*
      if (a !== undefined && b !== undefined)
        console.log(id, 'clip', a, b);
      else if (a !== undefined)
        console.log(id, 'clip', a);
      else
        console.log(id, 'clip');
      */
    },

    transform: function (sx, rx, ry, sy, tx, ty) {
      //console.log(id, 'transform', sx, rx, ry, sy, tx, ty);
      this._transform = multiply_transform([sx, rx, ry, sy, tx, ty], this._transform);
    },
    createPattern: function (image, repetition) {
      //console.log(id, 'createPattern', image.src, repetition);
      return {src: image.src};
    },
    set fillStyle(value) {
      //console.log(id, 'set', 'fillStyle', value);
      return this._fillStyle = value;
    },
    fillRect: function (x, y, width, height) {
      //console.log(id, 'fillRect', x, y, width, height);

      if (x === 0) {
        extracted.width = width;
        extracted.height = height;
        extracted.frames.push([]);
      }
      else {
        let frame = extracted.frames[extracted.frames.length-1];
        var transform = [1, 0, 0, 1, 0, 0];
        var current_item = {
          transform: this._transform,
        };

        [...this._stack, current_item].forEach(item => {
          //console.log(transform, 'x', item.transform, '=', multiply_transform(item.transform, transform));
          transform = multiply_transform(item.transform, transform);
        });

        // Adjust the transform to round the scaling to 2 decimal places.
        var sx = 1 / transform[0];
        var sy = 1 / transform[3];
        transform = multiply_transform([sx, 0, 0, sy, 0, 0], transform);

        // Only so much precision matters
        transform[0] = transform[0].toFixed(2) * 1;
        transform[3] = transform[3].toFixed(2) * 1;
        transform[4] = transform[4].toFixed(0) * 1;
        transform[5] = transform[5].toFixed(0) * 1;

        var shape = {};

        if (typeof(this._fillStyle) === 'object') {
          if ('src' in this._fillStyle)
            shape.image = extracted.images.indexOf(this._fillStyle.src);
          else
            throw new Error('Unsupported fillStyle', this._fillStyle);
        }
        else {
          throw new Error('Unsupported fillStyle', this._fillStyle);
        }

        if (transform[0] === transform[3]) {
          if (transform[0] !== 1)
            shape.scale = transform[0];
        }
        else {
          if (transform[0] !== 1)
            shape.scale_x = transform[0];
          if (transform[3] !== 1)
            shape.scale_y = transform[3];
        }

        if (transform[1] === transform[2]) {
          if (transform[1] !== 0)
            shape.skew = transform[1];
        }
        else {
          if (transform[1] !== 0)
            shape.skew_x = transform[1];
          if (transform[2] !== 0)
            shape.skew_y = transform[2];
        }

        if (transform[4] !== 0)
          shape.x = transform[4];
        if (transform[5] !== 0)
          shape.y = transform[5];

        frame.push(shape);
      }
    },

    save: function () {
      //console.log(id, 'save');
      this._stack.push({
        transform: this._transform,
      });
      this._transform = [1, 0, 0, 1, 0, 0];
    },
    restore: function () {
      //console.log(id, 'restore');
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

  return context;
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
  fs.writeFileSync('units/'+file_prefix+'.min.json', JSON.stringify(extracted));
  console.log('Wrote '+file_prefix+'.min.json');
  fs.writeFileSync('units/'+file_prefix+'.json', JSON.stringify(extracted, null, 2));
  console.log('Wrote '+file_prefix+'.json');
}
