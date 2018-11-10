'use strict';

const path = require('path');
const vm = require('vm');
const fs = require('fs');
const assert = require('assert');

const JSDOM = require('jsdom').JSDOM;
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

scripts.push("window.postMessage({type:'frame_count',value:frames.length});");

vm.runInNewContext(scripts.join(';'), {
  window: mock_window(dom),
  document: mock_document(dom),
  Image: Image,
  setTimeout: (callback, timeout) => {
    var id = setTimeout(() => {
      if (extracted.frames.length === frame_count) {
        clearTimeout(id);
        return export_extracted();
      }

      callback();
    }, timeout);

    return id;
  },
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
    setTimeout: (callback, timeout) => {
      var id = setTimeout(() => {
        if (extracted.frames.length === frame_count) {
          clearTimeout(id);
          return export_extracted();
        }

        callback();
      }, timeout);

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
    get body() {
      return dom.window.document.body;
    },
    getElementById: id => {
      var element = dom.window.document.getElementById(id);
      if (element.tagName === 'CANVAS') {
        return makeMockObject('#myCanvas', {
          get width() {
            return element.width;
          },
          get height() {
            return element.height;
          },
          getContext: () => mock_canvas_context(dom, '#myCanvas.context'),
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

function mock_canvas_context(dom, id) {
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
      console.log(id, 'transform', sx, rx, ry, sy, tx, ty);
      this._transform = multiply_transform([sx, rx, ry, sy, tx, ty], this._transform);
    },
    createPattern: function (image, repetition) {
      //console.log(id, 'createPattern', image.src, repetition);
      return image;
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
          console.log(transform, 'x', item.transform, '=', multiply_transform(item.transform, transform));
          transform = multiply_transform(item.transform, transform);
        });

        // Adjust the transform to round the scaling to 2 decimal places.
        var sx = Math.abs(1 / transform[0]);
        var sy = Math.abs(1 / transform[3]);
        console.log(transform, sx, sy);
        transform = multiply_transform([sx, 0, 0, sy, 0, 0], transform);
        console.log(transform);

        // Only so much precision matters
        transform[0] = transform[0].toFixed(2) * 1;
        transform[3] = transform[3].toFixed(2) * 1;
        transform[4] = transform[4].toFixed(0) * 1;
        transform[5] = transform[5].toFixed(0) * 1;
        console.log(transform);

        var shape = {};
        var fillStyle = this._fillStyle;

        if (typeof(fillStyle) === 'object') {
          if (fillStyle instanceof Image) {
            let src = fillStyle.src;
            let index = extracted.images.indexOf(src);

            if (index === -1) {
              extracted.images.push(src);
              shape.image = extracted.images.length-1;
            }
            else {
              shape.image = index;
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
  console.log('Wrote units/'+file_prefix+'.min.json');
  fs.writeFileSync('units/'+file_prefix+'.json', JSON.stringify(extracted, null, 2));
  console.log('Wrote units/'+file_prefix+'.json');
}
