'use strict';

const Scanner = require('../src/scanner');
const assert = require('assert');

{ // Tags and attributes
  let scanner = new Scanner();
  scanner.readChunk(`
    <tag a=x b=1 c="y" d='z'></tag>
  `);
  assert.deepEqual(scanner.tokens, [
    ['text', '\n    '],
    ['tag-start', 'tag'],
    ['attr-key', 'a'],
    ['attr-value', 'x'],
    ['attr-key', 'b'],
    ['attr-value', '1'],
    ['attr-key', 'c'],
    ['attr-value', 'y'],
    ['attr-key', 'd'],
    ['attr-value', 'z'],
    ['tag-end', ''],
    ['tag-start', '/tag'],
    ['tag-end', ''],
    ['text', '\n  '],
  ]);
}

{ // Explicit self-closing
  let scanner = new Scanner();
  scanner.readChunk('<x />');
  assert.deepEqual(scanner.tokens, [
    ['tag-start', 'x'],
    ['tag-end', '/'],
  ]);
}

{ // Comments are excluded
  let scanner = new Scanner();
  scanner.readChunk('<!--comment-->');
  assert.deepEqual(scanner.tokens, []);
  scanner.readChunk('<!--');
  scanner.readChunk('hidden');
  scanner.readChunk('-->');
  assert.deepEqual(scanner.tokens, []);
}

{ // Attribute key WS before />
  let scanner = new Scanner();
  scanner.readChunk('<x a />');
  assert.deepEqual(scanner.tokens, [
    ['tag-start', 'x'],
    ['attr-key', 'a'],
    ['tag-end', '/'],
  ]);
}
