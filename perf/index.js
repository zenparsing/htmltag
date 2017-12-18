'use strict';

const createCompiler = require('../src/compiler');
const largeDocument = require('./large-doc');
const actions = require('../tree-builder');

let html = createCompiler({ actions });
let htmlWithCache = createCompiler({ actions, cache: new WeakMap() });

function time(name, count, fn) {
  let start = Date.now();
  for (let i = 0; i < count; ++i) {
    fn(i);
  }
  console.log(`${name}: ${Date.now() - start}ms`);
}

time('Large document compile', 10, i => {
  largeDocument(html);
});

time('Large document compile (cached)', 10, i => {
  largeDocument(htmlWithCache);
});
