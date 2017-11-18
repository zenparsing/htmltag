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

/*
{ // Exclicit self-closing with no space
  let scanner = new Scanner();
  scanner.readChunk('<x/>');
  assert.deepEqual(scanner.tokens, [
    ['tag-start', 'x'],
    ['tag-end', '/'],
  ]);
}
*/

{ // Comments are excluded
  let scanner = new Scanner();
  scanner.readChunk('<!--comment-->');
  assert.deepEqual(scanner.tokens, []);
  scanner.readChunk('<!--');
  scanner.readChunk('hidden');
  scanner.readChunk('-->');
  assert.deepEqual(scanner.tokens, []);
}

{ // Strange tag name with !--
  let scanner = new Scanner();
  scanner.readChunk('<a!-- />');
  assert.deepEqual(scanner.tokens, [
    ['tag-start', 'a!--'],
    ['tag-end', '/'],
  ]);
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

{ // Raw tag: script
  let scanner = new Scanner();
  scanner.readChunk('<script>console.log("<tag>")</script>');
  assert.deepEqual(scanner.tokens, [
    ['tag-start', 'script'],
    ['tag-end', ''],
    ['text', 'console.log("<tag>")'],
    ['tag-start', '/script'],
    ['tag-end', ''],
  ]);
}

{ // Raw tag with values
  let scanner = new Scanner();
  scanner.readChunk('<script>a');
  scanner.pushValue('b');
  scanner.readChunk('c</script>');
  assert.deepEqual(scanner.tokens, [
    ['tag-start', 'script'],
    ['tag-end', ''],
    ['text', 'a'],
    ['text', 'b'],
    ['text', 'c'],
    ['tag-start', '/script'],
    ['tag-end', ''],
  ]);
}

{ // Raw self-closing
  let scanner = new Scanner();
  scanner.readChunk('<script /><x></x>');
  assert.deepEqual(scanner.tokens, [
    ['tag-start', 'script'],
    ['tag-end', '/'],
    ['tag-start', 'x'],
    ['tag-end', ''],
    ['tag-start', '/x'],
    ['tag-end', ''],
  ]);
}

{ // Raw tag: style
  let scanner = new Scanner();
  scanner.readChunk('<style>a { content: "<tag>" }</style>');
  assert.deepEqual(scanner.tokens, [
    ['tag-start', 'style'],
    ['tag-end', ''],
    ['text', 'a { content: "<tag>" }'],
    ['tag-start', '/style'],
    ['tag-end', ''],
  ]);
}

{ // Character escapes
  let scanner = new Scanner();
  scanner.readChunk('<x>\\<tag\\></x>');
  assert.deepEqual(scanner.tokens, [
    ['tag-start', 'x'],
    ['tag-end', ''],
    ['text', '<tag>'],
    ['tag-start', '/x'],
    ['tag-end', ''],
  ]);
}

{ // Hex escapes
  let scanner = new Scanner();
  scanner.readChunk('<x>\\x40</x>');
  assert.deepEqual(scanner.tokens, [
    ['tag-start', 'x'],
    ['tag-end', ''],
    ['text', '@'],
    ['tag-start', '/x'],
    ['tag-end', ''],
  ]);
}

{ // Unicode escapes
  let scanner = new Scanner();
  scanner.readChunk('<x>\\u0040</x>');
  assert.deepEqual(scanner.tokens, [
    ['tag-start', 'x'],
    ['tag-end', ''],
    ['text', '@'],
    ['tag-start', '/x'],
    ['tag-end', ''],
  ]);
}

{ // No escapes in raw
  let scanner = new Scanner();
  scanner.readChunk('<script>\\x40</script>');
  assert.deepEqual(scanner.tokens, [
    ['tag-start', 'script'],
    ['tag-end', ''],
    ['text', '\\x40'],
    ['tag-start', '/script'],
    ['tag-end', ''],
  ]);
}

{ // Double backslash
  let scanner = new Scanner();
  scanner.readChunk('\\\\x\\\\y');
  assert.deepEqual(scanner.tokens, [['text', '\\x\\y']]);
}

{ // Strange
  let scanner = new Scanner();
  scanner.readChunk('<a b=/>');
  assert.deepEqual(scanner.tokens, [
    ['tag-start', 'a'],
    ['attr-key', 'b'],
    ['tag-end', '/'],
  ]);
}

{ // Strange
  let scanner = new Scanner();
  scanner.readChunk('<x /=y=1></x>');
  assert.deepEqual(scanner.tokens, [
    ['tag-start', 'x'],
    ['attr-key', 'y'],
    ['attr-value', '1'],
    ['tag-end', ''],
    ['tag-start', '/x'],
    ['tag-end', ''],
  ]);
}

{ // Missing closing tag name
  let scanner = new Scanner();
  scanner.readChunk('<x>a</>');
  assert.deepEqual(scanner.tokens, [
    ['tag-start', 'x'],
    ['tag-end', ''],
    ['text', 'a'],
    ['tag-start', '/'],
    ['tag-end', ''],
  ]);
}
