'use strict';

const TEXT = 1, RAW = 2, OPEN = 3, ATTR = 4;
const ATTR_KEY = 5, ATTR_KEY_WS = 6;
const ATTR_VALUE_WS = 7, ATTR_VALUE = 8;
const ATTR_VALUE_SQ = 9, ATTR_VALUE_DQ = 10;
const COMMENT = 11;

const ESC_RE = /^\\(?:x([0-9a-fA-F]{2})|u([0-9a-fA-F]{4}))?/;

function whitespaceChar(c) {
  return /\s/.test(c);
}

function attributeChar(c) {
  return !whitespaceChar(c) && c !== '"' && c !== "'" && c !== '=' && c !== '/';
}

function rawTag(tag) {
  return tag === 'script' || tag === 'style';
}

// Incrementally tokenize a chunk of HTML
function readChunk(chunk) {
  let state = this.state;
  let tokens = this.tokens;
  let tag = this.tag;
  let a = 0;
  let b = 0;

  function move(s, pos = b + 1) {
    state = s;
    a = pos;
  }

  function push(type) {
    let value = chunk.slice(a, b);
    tokens.push([type, value]);
    if (type === 'tag-start') {
      tag = value;
    }
    a = b;
  }

  for (; b < chunk.length; ++b) {
    let c = chunk[b];
    if (state === RAW) {
      if (c === '>' && chunk.slice(b - tag.length - 2, b) === '</' + tag) {
        b -= tag.length + 3;
        state = TEXT;
      }
    } else if (state === COMMENT) {
      if (c === '>' && chunk.slice(b - 2, b) === '--') {
        move(TEXT);
      }
    } else if (c === '\\') {
      chunk = chunk.slice(0, b) + chunk.slice(b).replace(ESC_RE, (m, x, y) =>
        m === '\\' ? '' : String.fromCharCode(parseInt(x || y, 16))
      );
    } else if (state === TEXT) {
      if (c === '<') {
        if (a < b) {
          push('text');
        }
        move(OPEN);
      }
    } else if (state === ATTR_VALUE_SQ) {
      if (c === "'") {
        push('attr-value');
        move(ATTR);
      }
    } else if (state === ATTR_VALUE_DQ) {
      if (c === '"') {
        push('attr-value');
        move(ATTR);
      }
    } else if (c === '>') {
      if (state === OPEN) {
        push('tag-start');
      } else if (state === ATTR_KEY) {
        push('attr-key');
      } else if (state === ATTR_VALUE) {
        push('attr-value');
      }
      push('tag-end');
      move(rawTag(tag) ? RAW : TEXT);
    } else if (state === OPEN) {
      if (c === '-' && chunk.slice(a, b) === '!-') {
        move(COMMENT);
      } else if (whitespaceChar(c)) {
        push('tag-start');
        move(ATTR);
      }
    } else if (state === ATTR) {
      if (attributeChar(c)) {
        move(ATTR_KEY, b);
      } else if (!whitespaceChar(c)) {
        move(ATTR, b);
      }
    } else if (state === ATTR_KEY) {
      if (whitespaceChar(c)) {
        push('attr-key');
        move(ATTR_KEY_WS);
      } else if (c === '=') {
        push('attr-key');
        move(ATTR_VALUE_WS);
      }
    } else if (state === ATTR_KEY_WS) {
      if (c === '=') {
        move(ATTR_VALUE_WS);
      } else if (attributeChar(c)) {
        move(ATTR_KEY, b);
      } else if (!whitespaceChar(c)) {
        move(ATTR, b);
      }
    } else if (state === ATTR_VALUE_WS) {
      if (c === '"') {
        move(ATTR_VALUE_DQ);
      } else if (c === "'") {
        move(ATTR_VALUE_SQ);
      } else if (!whitespaceChar(c)) {
        move(ATTR_VALUE, b);
      }
    } else if (state === ATTR_VALUE) {
      if (whitespaceChar(c)) {
        push('attr-value');
        move(ATTR);
      }
    }
  }

  if (a < b) {
    if (state === TEXT) {
      push('text');
    } else if (state === OPEN) {
      push('tag-start');
      move(ATTR);
    } else if (state === ATTR_KEY) {
      push('attr-key');
      move(ATTR);
    } else if (
      state === ATTR_VALUE ||
      state === ATTR_VALUE_DQ ||
      state === ATTR_VALUE_SQ
    ) {
      push('attr-value');
    }
  }

  this.state = state;
  this.tag = tag;
}

// Pushes a replacement value into the token list
function pushValue(value) {
  let state = this.state;
  let tokens = this.tokens;
  let type = '';

  switch (state) {
    case TEXT:
    case RAW:
      type = 'text';
      break;
    case OPEN:
      type = 'tag-start';
      state = ATTR;
      break;
    case ATTR:
    case ATTR_KEY:
    case ATTR_KEY_WS:
      type = 'attr-key';
      break;
    case ATTR_VALUE_WS:
      type = 'attr-value';
      state = ATTR;
      break;
    case ATTR_VALUE:
    case ATTR_VALUE_DQ:
    case ATTR_VALUE_SQ:
      type = 'attr-value';
      break;
  }

  if (type) {
    tokens.push([type, value]);
  }

  this.state = state;
}

function createScanner() {
  return {
    tokens: [],
    state: TEXT,
    tag: '',
    readChunk,
    pushValue,
  };
}

module.exports = createScanner;
