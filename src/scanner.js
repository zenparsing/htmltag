'use strict';

const TEXT = 1, RAW = 2, OPEN = 3, ATTR = 4;
const ATTR_KEY = 5, ATTR_KEY_WS = 6;
const ATTR_VALUE_WS = 7, ATTR_VALUE = 8;
const ATTR_VALUE_SQ = 9, ATTR_VALUE_DQ = 10;
const COMMENT = 11;

const ESC_RE = /^\\(?:x([0-9a-fA-F]{2})|u([0-9a-fA-F]{4}))?/;

function wsChar(c) {
  return /\s/.test(c);
}

function attrChar(c) {
  return !wsChar(c) && c !== '"' && c !== "'" && c !== '=' && c !== '/';
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

  function buffer() {
    return chunk.slice(a, b);
  }

  function push(type, value = buffer()) {
    tokens.push([type, value]);
    if (type === 'tag-start') {
      tag = value;
    }
    a = b;
  }

  function lookbehind(m) {
    return b - m.length >= a && chunk.slice(b - m.length, b) === m;
  }

  function unescape() {
    chunk = chunk.slice(0, b) + chunk.slice(b).replace(ESC_RE, (m, x, y) =>
      m === '\\' ? '' : String.fromCharCode(parseInt(x || y, 16))
    );
  }

  for (; b < chunk.length; ++b) {
    let c = chunk[b];
    if (state === RAW) {
      if (c === '>' && lookbehind('</' + tag)) {
        b -= tag.length + 3; // Rewind to closing tag
        state = TEXT;
      }
    } else if (state === COMMENT) {
      if (c === '>' && lookbehind('--')) {
        move(TEXT);
      }
    } else if (c === '\\') {
      unescape();
    } else if (state === TEXT) {
      if (c === '<') {
        if (b > a) {
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
      if (lookbehind('/')) {
        push('tag-end', '/');
        move(TEXT);
      } else {
        push('tag-end', '');
        move(rawTag(tag) ? RAW : TEXT);
      }
    } else if (state === OPEN) {
      if (c === '-' && buffer() === '!-') {
        move(COMMENT);
      } else if (c === '/' && b === a) {
        // Allow leading slash
      } else if (!attrChar(c)) {
        push('tag-start');
        move(ATTR);
      }
    } else if (state === ATTR) {
      if (attrChar(c)) {
        move(ATTR_KEY, b);
      }
    } else if (state === ATTR_KEY) {
      if (c === '=') {
        push('attr-key');
        move(ATTR_VALUE_WS);
      } else if (!attrChar(c)) {
        push('attr-key');
        move(ATTR_KEY_WS);
      }
    } else if (state === ATTR_KEY_WS) {
      if (c === '=') {
        move(ATTR_VALUE_WS);
      } else if (attrChar(c)) {
        move(ATTR_KEY, b);
      }
    } else if (state === ATTR_VALUE_WS) {
      if (c === '"') {
        move(ATTR_VALUE_DQ);
      } else if (c === "'") {
        move(ATTR_VALUE_SQ);
      } else if (attrChar(c)) {
        move(ATTR_VALUE, b);
      }
    } else if (state === ATTR_VALUE) {
      if (!attrChar(c)) {
        push('attr-value');
        move(ATTR);
      }
    }
  }

  if (a < b) {
    if (state === TEXT || state === RAW) {
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
