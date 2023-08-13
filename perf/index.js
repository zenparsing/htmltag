import { html, TemplateResult } from '../htmltag.js';
import { createLargeDocument } from './large-doc.js';

export function withCache(callsite, ...values) {
  return html(callsite, ...values);
}

export function withNoCache(callsite, ...values) {
  TemplateResult.cache = new WeakMap();
  return html(callsite, ...values);
}

function time(name, count, fn) {
  let start = Date.now();
  for (let i = 0; i < count; ++i) {
    fn(i);
  }
  console.log(`${name}  ${((Date.now() - start) / count).toFixed()}ms`);
}

time('First run                         ', 1, i => {
  createLargeDocument(withNoCache);
});

time('Warmup                            ', 3, i => {
  createLargeDocument(withNoCache);
});

time('Large document compile (no cache) ', 10, i => {
  createLargeDocument(withNoCache);
});

time('Large document compile (cache)    ', 10, i => {
  createLargeDocument(withCache);
});
