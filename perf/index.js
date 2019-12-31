'use strict';

const { createTag, TemplateResult } = require('../');
const largeDocument = require('./large-doc');
const { TreeBuilder } = require('../extras.js');

const html = createTag(new TreeBuilder());

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
