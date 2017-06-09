'use strict';

const TEXT = 1, OPEN = 2, ATTR = 4;
const ATTR_KEY = 5, ATTR_KEY_WS = 6;
const ATTR_VALUE_WS = 7, ATTR_VALUE = 8;
const ATTR_VALUE_SQ = 9, ATTR_VALUE_DQ = 10;
const COMMENT = 11;

function whitespaceChar(c) {
  return /\s/.test(c);
}

function attributeChar(c) {
  return !whitespaceChar(c) && c !== '"' && c !== "'" && c !== '=' && c !== '/';
}

// Incrementally tokenize a chunk of QuasiHTML
function readChunk(chunk, tokens, state = TEXT) {
  let a = 0;
  let b = 0;

  function move(s, pos = b + 1) { state = s; a = pos; }
  function push(type, value = chunk.slice(a, b)) { tokens.push([type, value]); a = b; }

  for (; b < chunk.length; ++b) {
    let c = chunk[b];
    if (state === TEXT) {
      if (c === '<') {
        if (a < b) {
          push('text');
        }
        move(OPEN);
      }
    } else if (
      c === '>' &&
      state !== ATTR_VALUE_SQ &&
      state !== ATTR_VALUE_DQ &&
      state !== COMMENT
    ) {
      if (state === OPEN) {
        push('tag-start');
      } else if (state === ATTR_KEY) {
        push('attr-key');
      } else if (state === ATTR_VALUE) {
        push('attr-value');
      }
      push('tag-end');
      move(TEXT);
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
        move(ATTR);
      }
    } else if (state === ATTR_VALUE_WS) {
      if (c === '"') {
        move(ATTR_VALUE_DQ);
      } else if (c === "'") {
        move(ATTR_VALUE_SQ);
      } else if (!whitespaceChar(c)) {
        move(ATTR_VALUE, b);
      }
    } else if (state === ATTR_VALUE_DQ) {
      if (c === '"') {
        push('attr-value');
        move(ATTR);
      }
    } else if (state === ATTR_VALUE_SQ) {
      if (c === "'") {
        push('attr-value');
        move(ATTR);
      }
    } else if (state === ATTR_VALUE) {
      if (whitespaceChar(c)) {
        push('attr-value');
        move(ATTR);
      }
    } else if (state === COMMENT) {
      if (c === '>' && chunk.slice(b - 2, b) === '--') {
        move(TEXT);
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

  return state;
}

// Pushes a replacement value into the token list
function pushValue(value, tokens, state = TEXT) {
  let type = '';
  switch (state) {
    case TEXT:
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
  return state;
}

function createScanner() {
  return {
    tokens: [],
    state: undefined,
    readChunk(chunk) { this.state = readChunk(chunk, this.tokens, this.state); },
    pushValue(value) { this.state = pushValue(value, this.tokens, this.state); },
  };
}

module.exports = createScanner;
