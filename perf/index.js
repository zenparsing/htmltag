import { html, createTag, TemplateResult, Token } from '../htmltag.js';
import { createLargeDocument } from './large-doc.js';
import { TreeBuilder } from '../extras.js';

export function expandTokens(list) {
  let tokens = [];
  for (let i = 0; i < list.length; i += 3) {
    tokens.push(new Token(list[i], list[i + 1], Boolean(list[i + 2])));
  }
  tokens.source = {};
  return tokens;
}

function serializeTokens(templateResult) {
  const $tokens = Object.getOwnPropertySymbols(templateResult)[0];
  return templateResult[$tokens].flatMap((token) => {
    return [token.type, token.value, token.mutable ? 1 : 0];
  });
}

const tokens = expandTokens(serializeTokens(createLargeDocument(html)));
const htmlTree = createTag(new TreeBuilder());

function time(name, count, fn) {
  let start = Date.now();
  for (let i = 0; i < count; ++i) {
    fn(i);
  }
  console.log(`${name}  ${(Date.now() - start).toFixed(2) / count}ms`);
}

time('Warmup                           ', 10, i => {
  TemplateResult.cache = new WeakMap();
  createLargeDocument(htmlTree);
  TemplateResult.cache = new WeakMap();
});

time('Large document compile (no cache) ', 2, i => {
  TemplateResult.cache = new WeakMap();
  createLargeDocument(htmlTree);
  TemplateResult.cache = new WeakMap();
});

time('Large document compile (cache)    ', 2, i => {
  createLargeDocument(htmlTree);
});

time('Large document serialized         ', 2, i => {
  new TemplateResult(tokens, []).evaluate(new TreeBuilder());
});
