'use strict';

const createCompiler = require('../src');
const largeDocument = require('./large-doc');

let html = createCompiler((tag, props, children) => {
  return { tag, props, children };
});

let htmlWithCache = createCompiler((tag, props, children) => {
  return { tag, props, children };
}, { cache: new WeakMap() });

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