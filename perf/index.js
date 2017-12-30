'use strict';

const { createTag, TemplateResult } = require('../src');
const largeDocument = require('./large-doc');
const actions = require('../src/tree-builder');

const html = createTag(actions);

function time(name, count, fn) {
  let start = Date.now();
  for (let i = 0; i < count; ++i) {
    fn(i);
  }
  console.log(`${name}  ${(Date.now() - start) / count}ms`);
}

time('Large document compile (100, no cache)', 10, i => {
  largeDocument(html);
  TemplateResult.cache = new WeakMap();
});

time('Large document compile (1000, cache)  ', 100, i => {
  largeDocument(html);
});
