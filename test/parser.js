import * as assert from 'assert';

import {
  Parser,
  T_COMMENT,
  T_TEXT,
  T_ATTR_PART,
  T_ATTR_MAP,
  T_ATTR_VALUE,
  T_TAG_START,
  T_ATTR_KEY,
  T_TAG_END,
} from '../htmltag.js';

function assertTokenList(actual, expected) {
  assert.deepStrictEqual(actual.map(t => [t.type, t.value]), expected);
}

{ // Tags and attributes
  let parser = new Parser();
  parser.parseChunk(`
    <tag a=x b=1 c="y" d='z'></tag>
  `);
  assertTokenList(parser.tokens, [
    [T_TEXT, '\n    '],
    [T_TAG_START, 'tag'],
    [T_ATTR_KEY, 'a'],
    [T_ATTR_VALUE, 'x'],
    [T_ATTR_KEY, 'b'],
    [T_ATTR_VALUE, '1'],
    [T_ATTR_KEY, 'c'],
    [T_ATTR_VALUE, 'y'],
    [T_ATTR_KEY, 'd'],
    [T_ATTR_VALUE, 'z'],
    [T_TAG_END, ''],
    [T_TAG_START, '/tag'],
    [T_TAG_END, ''],
    [T_TEXT, '\n  '],
  ]);
}

{ // Explicit self-closing
  let parser = new Parser();
  parser.parseChunk('<x />');
  assertTokenList(parser.tokens, [
    [T_TAG_START, 'x'],
    [T_TAG_END, '/'],
  ]);
}

{ // Exclicit self-closing with no space
  let parser = new Parser();
  parser.parseChunk('<x/>');
  assertTokenList(parser.tokens, [
    [T_TAG_START, 'x'],
    [T_TAG_END, '/'],
  ]);
}

{ // Comments
  let parser = new Parser();
  parser.parseChunk('<!--test-->');
  assertTokenList(parser.tokens, [[T_COMMENT, 'test']]);
  parser = new Parser();
  parser.parseChunk('<!--');
  parser.parseChunk('hidden');
  parser.parseChunk('-->');
  assertTokenList(parser.tokens, [[T_COMMENT, 'hidden']]);
  parser = new Parser();
  parser.parseChunk('<!--a');
  parser.pushValue('b');
  parser.parseChunk('c');
  parser.parseChunk('d-->');
  assertTokenList(parser.tokens, [
    [T_COMMENT, 'a'],
    [T_COMMENT, 'b'],
    [T_COMMENT, 'c'],
    [T_COMMENT, 'd'],
  ]);
}

{ // Strange tag name with !--
  let parser = new Parser();
  parser.parseChunk('<a!-- />');
  assertTokenList(parser.tokens, [
    [T_TAG_START, 'a!--'],
    [T_TAG_END, '/'],
  ]);
}

{ // Attribute key WS before />
  let parser = new Parser();
  parser.parseChunk('<x a />');
  assertTokenList(parser.tokens, [
    [T_TAG_START, 'x'],
    [T_ATTR_KEY, 'a'],
    [T_TAG_END, '/'],
  ]);
}

{ // Raw tag: script
  let parser = new Parser();
  parser.parseChunk('<script>console.log("<tag>")</script>');
  assertTokenList(parser.tokens, [
    [T_TAG_START, 'script'],
    [T_TAG_END, ''],
    [T_TEXT, 'console.log("<tag>")'],
    [T_TAG_START, '/script'],
    [T_TAG_END, ''],
  ]);
}

{ // Raw tag with values
  let parser = new Parser();
  parser.parseChunk('<script>a');
  parser.pushValue('b');
  parser.parseChunk('c</script>');
  assertTokenList(parser.tokens, [
    [T_TAG_START, 'script'],
    [T_TAG_END, ''],
    [T_TEXT, 'a'],
    [T_TEXT, 'b'],
    [T_TEXT, 'c'],
    [T_TAG_START, '/script'],
    [T_TAG_END, ''],
  ]);
}

{ // Raw self-closing
  let parser = new Parser();
  parser.parseChunk('<script /><x></x>');
  assertTokenList(parser.tokens, [
    [T_TAG_START, 'script'],
    [T_TAG_END, '/'],
    [T_TAG_START, 'x'],
    [T_TAG_END, ''],
    [T_TAG_START, '/x'],
    [T_TAG_END, ''],
  ]);
}

{ // Raw tag: style
  let parser = new Parser();
  parser.parseChunk('<style>a { content: "<tag>" }</style>');
  assertTokenList(parser.tokens, [
    [T_TAG_START, 'style'],
    [T_TAG_END, ''],
    [T_TEXT, 'a { content: "<tag>" }'],
    [T_TAG_START, '/style'],
    [T_TAG_END, ''],
  ]);
}

{ // Character escapes
  let parser = new Parser();
  parser.parseChunk('<x>&lt;tag&gt;&amp;&quot;</x>');
  assertTokenList(parser.tokens, [
    [T_TAG_START, 'x'],
    [T_TAG_END, ''],
    [T_TEXT, '<tag>&"'],
    [T_TAG_START, '/x'],
    [T_TAG_END, ''],
  ]);
}

{ // Decimal escapes
  let parser = new Parser();
  parser.parseChunk('<x>&#64;</x>');
  assertTokenList(parser.tokens, [
    [T_TAG_START, 'x'],
    [T_TAG_END, ''],
    [T_TEXT, '@'],
    [T_TAG_START, '/x'],
    [T_TAG_END, ''],
  ]);
}

{ // Hex escapes
  let parser = new Parser();
  parser.parseChunk('<x>&#x40;</x>');
  assertTokenList(parser.tokens, [
    [T_TAG_START, 'x'],
    [T_TAG_END, ''],
    [T_TEXT, '@'],
    [T_TAG_START, '/x'],
    [T_TAG_END, ''],
  ]);
}

{ // Unicode escapes
  let parser = new Parser();
  parser.parseChunk('<x>&#x0040 &lt &amp</x>');
  assertTokenList(parser.tokens, [
    [T_TAG_START, 'x'],
    [T_TAG_END, ''],
    [T_TEXT, '@ < &'],
    [T_TAG_START, '/x'],
    [T_TAG_END, ''],
  ]);
}

{ // Missing semicolon in escape
  let parser = new Parser();
  parser.parseChunk('<x>&#x0040</x>');
  assertTokenList(parser.tokens, [
    [T_TAG_START, 'x'],
    [T_TAG_END, ''],
    [T_TEXT, '@'],
    [T_TAG_START, '/x'],
    [T_TAG_END, ''],
  ]);
}

{ // Unknown named reference
  let parser = new Parser();
  parser.parseChunk('&foobar;');
  assertTokenList(parser.tokens, [
    [T_TEXT, '&foobar;'],
  ]);
}

{ // No escapes in raw
  let parser = new Parser();
  parser.parseChunk('<script>&#x0040</script>');
  assertTokenList(parser.tokens, [
    [T_TAG_START, 'script'],
    [T_TAG_END, ''],
    [T_TEXT, '&#x0040'],
    [T_TAG_START, '/script'],
    [T_TAG_END, ''],
  ]);
}

{ // Strange
  let parser = new Parser();
  parser.parseChunk('<a b=/>');
  assertTokenList(parser.tokens, [
    [T_TAG_START, 'a'],
    [T_ATTR_KEY, 'b'],
    [T_TAG_END, '/'],
  ]);
}

{ // Strange
  let parser = new Parser();
  parser.parseChunk('<x /=y=1></x>');
  assertTokenList(parser.tokens, [
    [T_TAG_START, 'x'],
    [T_ATTR_KEY, 'y'],
    [T_ATTR_VALUE, '1'],
    [T_TAG_END, ''],
    [T_TAG_START, '/x'],
    [T_TAG_END, ''],
  ]);
}

{ // Missing closing tag name
  let parser = new Parser();
  parser.parseChunk('<x>a</>');
  assertTokenList(parser.tokens, [
    [T_TAG_START, 'x'],
    [T_TAG_END, ''],
    [T_TEXT, 'a'],
    [T_TAG_START, '/'],
    [T_TAG_END, ''],
  ]);
}

{ // Attribute parts DQ
  let parser = new Parser();
  parser.parseChunk('<x y="a');
  parser.pushValue('b');
  parser.parseChunk('c');
  parser.pushValue('d');
  parser.parseChunk('e" />');
  assertTokenList(parser.tokens, [
    [T_TAG_START, 'x'],
    [T_ATTR_KEY, 'y'],
    [T_ATTR_PART, 'a'],
    [T_ATTR_PART, 'b'],
    [T_ATTR_PART, 'c'],
    [T_ATTR_PART, 'd'],
    [T_ATTR_PART, 'e'],
    [T_TAG_END, '/'],
  ]);
}

{ // Attribute parts SQ
  let parser = new Parser();
  parser.parseChunk("<x y='a");
  parser.pushValue('b');
  parser.parseChunk('c');
  parser.pushValue('d');
  parser.parseChunk("e' />");
  assertTokenList(parser.tokens, [
    [T_TAG_START, 'x'],
    [T_ATTR_KEY, 'y'],
    [T_ATTR_PART, 'a'],
    [T_ATTR_PART, 'b'],
    [T_ATTR_PART, 'c'],
    [T_ATTR_PART, 'd'],
    [T_ATTR_PART, 'e'],
    [T_TAG_END, '/'],
  ]);
}

{ // Attribute parts must be quoted
  let parser = new Parser();
  parser.parseChunk('<x y=a');
  parser.pushValue('b');
  parser.parseChunk('c />');
  assertTokenList(parser.tokens, [
    [T_TAG_START, 'x'],
    [T_ATTR_KEY, 'y'],
    [T_ATTR_VALUE, 'a'],
    [T_ATTR_MAP, 'b'],
    [T_ATTR_KEY, 'c'],
    [T_TAG_END, '/'],
  ]);
}

{ // Attribute maps
  let parser = new Parser();
  parser.parseChunk('<x');
  parser.pushValue('map');
  parser.parseChunk('/>');
  assertTokenList(parser.tokens, [
    [T_TAG_START, 'x'],
    [T_ATTR_MAP, 'map'],
    [T_TAG_END, '/'],
  ]);
}

{ // Strange self-closing bug
  let parser = new Parser();
  parser.parseChunk(`
    <path></path>
    <path id='r2'>
      <animate />
    </path>
  `);
  assertTokenList(parser.tokens, [
    [T_TEXT, '\n    '],
    [T_TAG_START, 'path'],
    [T_TAG_END, ''],
    [T_TAG_START, '/path'],
    [T_TAG_END, ''],
    [T_TEXT, '\n    '],
    [T_TAG_START, 'path'],
    [T_ATTR_KEY, 'id'],
    [T_ATTR_VALUE, 'r2'],
    [T_TAG_END, ''],
    [T_TEXT, '\n      '],
    [T_TAG_START, 'animate'],
    [T_TAG_END, '/'],
    [T_TEXT, '\n    '],
    [T_TAG_START, '/path'],
    [T_TAG_END, ''],
    [T_TEXT, '\n  '],
  ]);
}
