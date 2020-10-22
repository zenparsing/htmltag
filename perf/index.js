import { createTag, TemplateResult } from '../htmltag.js';
import { createLargeDocument } from './large-doc.js';
import { TreeBuilder } from '../extras.js';

const html = createTag(new TreeBuilder());
const warmup = 50;

function time(name, count, fn) {
  for (let i = 0; i < warmup; ++i) {
    fn(i);
  }
  let start = Date.now();
  for (let i = 0; i < count; ++i) {
    fn(i);
  }
  console.log(`${name}  ${(Date.now() - start).toFixed(2) / count}ms`);
}

time('Large document compile (100, no cache)', 10, i => {
  createLargeDocument(html);
  TemplateResult.cache = new WeakMap();
});

time('Large document compile (100, cache)   ', 10, i => {
  createLargeDocument(html);
});
