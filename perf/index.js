import { createTag, TemplateResult } from '../htmltag.js';
import { createLargeDocument } from './large-doc.js';
import { TreeBuilder } from '../extras.js';

const html = createTag(new TreeBuilder());

function time(name, count, fn) {
  let start = Date.now();
  for (let i = 0; i < count; ++i) {
    fn(i);
  }
  console.log(`${name}  ${(Date.now() - start) / count}ms`);
}

time('Large document compile (100, no cache)', 10, i => {
  createLargeDocument(html);
  TemplateResult.cache = new WeakMap();
});

time('Large document compile (1000, cache)  ', 100, i => {
  createLargeDocument(html);
});
