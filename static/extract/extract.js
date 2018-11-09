'use strict';

const vm = require('vm');
const htmlparser = require('htmlparser');
const fs = require('fs');

var canvas_js;

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

  vm.runInNewContext(canvas_js+';'+js, {
    window: mock_window(),
    document: mock_document(handler.dom),
  }, 'vm.js');
});

function makeMockObject(id, handler) {
  handler.__proxy__ = id;

  return new Proxy(handler, {
    get: (target, prop, receiver) => {
      var descriptor = Object.getOwnPropertyDescriptor(target, prop)

      if (descriptor) {
        if ('value' in descriptor)
          return target[prop];
        else if (descriptor.get)
          return target[prop];
      }
      else if (prop === '__proto__')
        return target.__proto__;

      throw new Error("Need to 'get' '"+id+"."+prop+"'");
    },
    set: (target, prop, value, receiver) => {
      var descriptor = Object.getOwnPropertyDescriptor(target, prop);

      if (descriptor) {
        if (descriptor.set)
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
      setInterval(() => {
        console.log('Starting new frame');
        callback();
      }, interval);
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
            return element.attribs.width;
          },
          get height() {
            return element.attribs.height;
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
    set fillStyle(value) {
      console.log(id, 'set', 'fillStyle', value);
      return this._fillStyle = value;
    },

    fillRect: (x, y, width, height) => {
      console.log(id, 'fillRect', x, y, width, height);
    },

    transform: (vs, vk, hk, hs, tx, ty) => {
      console.log(id, 'transform', vs, vk, hk, hs, tx, ty);
    },

    beginPath: () => {
      console.log(id, 'beginPath');
    },
    moveTo: (x, y) => {
      console.log(id, 'moveTo', x, y);
    },
    lineTo: (x, y) => {
      console.log(id, 'lineTo', x, y);
    },
    clip: (a, b) => {
      if (a !== undefined && b !== undefined)
        console.log(id, 'clip', a, b);
      else if (a !== undefined)
        console.log(id, 'clip', a);
      else
        console.log(id, 'clip');
    },

    createPattern: (image, repetition) => {
      console.log(id, 'createPattern', image.src, repetition);
    },

    save: () => {
      console.log(id, 'save');
    },
    restore: () => {
      console.log(id, 'restore');
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
