'use strict';

const placeholder = {};
const $tokens = Symbol('tokens');

const TEXT = 1, RAW = 2, OPEN = 3, ATTR = 4;
const ATTR_KEY = 5, ATTR_KEY_WS = 6;
const ATTR_VALUE_WS = 7, ATTR_VALUE = 8;
const ATTR_VALUE_SQ = 9, ATTR_VALUE_DQ = 10;
const COMMENT = 11;

const ESC_RE = /&(?:(lt|gt|amp|quot)|#([0-9]+)|#x([0-9a-f]+));?/ig;
const NAMED_REFS = { lt: '<', gt: '>', amp: '&', quot: '"' };

function wsToken(t) {
  return t[0] === 'text' && typeof t[1] === 'string' && (!t[1] || !t[1].trim());
}

function rmatch(s, end, t) {
  return end >= t.length && s.slice(end - t.length, end) === t;
}

function wsChar(c) {
  switch (c) {
    case ' ':
    case '\n':
    case '\r':
    case '\t':
    case '\f':
    case '\v':
      return true;
  }
  return c.charCodeAt(0) > 128 && /\s/.test(c);
}

function attrChar(c) {
  return !wsChar(c) && c !== '"' && c !== "'" && c !== '=' && c !== '/';
}

function rawTag(tag) {
  return tag === 'script' || tag === 'style';
}


class Parser {

  constructor() {
    this.tokens = [];
    this.state = TEXT;
    this.tag = '';
  }

  parseChunk(chunk) {
    let state = this.state;
    let tokens = this.tokens;
    let attrPart = (state === ATTR_VALUE_DQ || state === ATTR_VALUE_SQ);
    let hasEscape = false;
    let a = 0;
    let b = 0;

    function move(s, shift) {
      state = s;
      a = shift ? b : b + 1;
    }

    function push(type, value) {
      if (value === undefined) {
        value = chunk.slice(a, b);
      }
      if (hasEscape) {
        hasEscape = false;
        value = value.replace(ESC_RE, (m, name, dec, hex) => name ?
          NAMED_REFS[name.toLowerCase()] :
          String.fromCharCode(parseInt(dec || hex, hex ? 16 : 10))
        );
      }
      tokens.push([type, value]);
      a = b;
      return value;
    }

    for (; b < chunk.length; ++b) {
      let c = chunk[b];
      if (state === RAW) {
        if (c === '>' && rmatch(chunk, b, '</' + this.tag)) {
          b -= this.tag.length + 3; // Rewind to closing tag
          state = TEXT;
        }
      } else if (c === '&') {
        hasEscape = true;
      } else if (state === COMMENT) {
        if (c === '>' && rmatch(chunk, b, '--')) {
          if (b - 2 > a) {
            push('comment', chunk.slice(a, b - 2));
          }
          move(TEXT);
        }
      } else if (state === TEXT) {
        if (c === '<') {
          if (b > a) {
            push('text');
          }
          move(OPEN);
        }
      } else if (state === ATTR_VALUE_SQ) {
        if (c === "'") {
          push(attrPart ? 'attr-part' : 'attr-value');
          attrPart = false;
          move(ATTR);
        }
      } else if (state === ATTR_VALUE_DQ) {
        if (c === '"') {
          push(attrPart ? 'attr-part' : 'attr-value');
          attrPart = false;
          move(ATTR);
        }
      } else if (c === '>') {
        if (state === OPEN) {
          this.tag = push('tag-start');
        } else if (state === ATTR_KEY) {
          push('attr-key');
        } else if (state === ATTR_VALUE) {
          push('attr-value');
        }
        if (rmatch(chunk, b, '/') && this.tag[0] !== '/') {
          push('tag-end', '/');
          move(TEXT);
        } else {
          push('tag-end', '');
          move(rawTag(this.tag) ? RAW : TEXT);
        }
      } else if (state === OPEN) {
        if (c === '-' && chunk.slice(a, b) === '!-') {
          move(COMMENT);
        } else if (c === '/' && b === a) {
          // Allow leading slash
        } else if (!attrChar(c)) {
          this.tag = push('tag-start');
          move(ATTR);
        }
      } else if (state === ATTR) {
        if (attrChar(c)) {
          move(ATTR_KEY, true);
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
          move(ATTR_KEY, true);
        }
      } else if (state === ATTR_VALUE_WS) {
        if (c === '"') {
          move(ATTR_VALUE_DQ);
        } else if (c === "'") {
          move(ATTR_VALUE_SQ);
        } else if (attrChar(c)) {
          move(ATTR_VALUE, true);
        }
      } else if (state === ATTR_VALUE) {
        if (!attrChar(c)) {
          push('attr-value');
          move(ATTR);
        }
      }
    }

    if (state === TEXT || state === RAW) {
      if (a < b) {
        push('text');
      }
    } else if (state === COMMENT) {
      if (a < b) {
        push('comment');
      }
    } else if (state === OPEN) {
      if (a < b) {
        this.tag = push('tag-start');
        move(ATTR);
      }
    } else if (state === ATTR_KEY) {
      push('attr-key');
      move(ATTR);
    } else if (state === ATTR_KEY_WS) {
      move(ATTR);
    } else if (state === ATTR_VALUE) {
      push('attr-value');
      move(ATTR);
    } else if (state === ATTR_VALUE_SQ || state === ATTR_VALUE_DQ) {
      if (a < b) {
        push('attr-part');
      }
    }

    this.state = state;
  }

  pushValue(value) {
    let state = this.state;
    let tokens = this.tokens;
    let type = '';

    switch (state) {
      case TEXT:
      case RAW:
        type = 'text';
        break;
      case COMMENT:
        type = 'comment';
        break;
      case OPEN:
        type = 'tag-start';
        this.tag = value;
        state = ATTR;
        break;
      case ATTR:
        type = 'attr-map';
        break;
      case ATTR_VALUE_WS:
        type = 'attr-value';
        state = ATTR;
        break;
      case ATTR_VALUE_SQ:
      case ATTR_VALUE_DQ:
        type = 'attr-part';
        break;
    }

    if (type) {
      tokens.push([type, value]);
    }

    this.state = state;
  }

  end() {
    let tokens = this.tokens;
    let a = 0;
    let b = tokens.length;

    if (b === 0) {
      return tokens;
    }

    if (wsToken(tokens[0])) { a++; }
    if (wsToken(tokens[b - 1])) { b--; }

    return a === 0 && b === tokens.length ? tokens : tokens.slice(a, b);
  }

}


function tokenize(chunks) {
  if (chunks.length === 0) {
    return [];
  }
  let parser = new Parser();
  parser.parseChunk(chunks[0]);
  for (let i = 1; i < chunks.length; i++) {
    parser.pushValue(placeholder);
    parser.parseChunk(chunks[i]);
  }
  return parser.end();
}


function walk(i, node, tokens, vals, actions) {
  for (; i < tokens.length; ++i) {
    let t = tokens[i];
    switch (t[0]) {
      case 'tag-start': {
        let tag = vals.read(t);
        if (typeof tag === 'string' && tag[0] === '/') { // Closing tag
          while (i < tokens.length && tokens[++i][0] !== 'tag-end'); // Skip attributes
          return i;
        }
        let child = actions.createElement(tag, node);
        i = walk(i + 1, child, tokens, vals, actions);
        actions.appendChild(node, actions.finishElement(child));
        break;
      }
      case 'tag-end':
        if (t[1] === '/') { return i; }
        break;
      case 'text':
        actions.appendChild(node, vals.read(t));
        break;
      case 'comment':
        actions.appendChild(node, actions.createComment(vals.read(t), node));
        break;
      case 'attr-map':
        actions.setAttributes(node, vals.read(t));
        break;
      case 'attr-key': {
        let name = vals.read(t);
        switch (i + 1 < tokens.length ? tokens[i + 1][0] : '') {
          case 'attr-value':
            actions.setAttribute(node, name, vals.read(tokens[++i]));
            break;
          case 'attr-part': {
            let parts = [vals.read(tokens[++i])];
            while (i + 1 < tokens.length && tokens[i + 1][0] === 'attr-part') {
              parts.push(vals.read(tokens[++i]));
            }
            actions.setAttributeParts(node, name, parts);
            break;
          }
          default:
            actions.setAttribute(node, name, true);
            break;
        }
      }
    }
  }
}


class Vals {

  constructor(values, actions) {
    this.index = 0;
    this.values = values;
    this.actions = actions;
  }

  read(t) {
    if (t[1] === placeholder) {
      return this.actions.mapValue(this.values[this.index++]);
    }
    return t[1];
  }

}


class TemplateResult {

  constructor(callsite, values) {
    let tokens = TemplateResult.cache.get(callsite);
    if (!tokens) {
      tokens = tokenize(callsite.raw);
      tokens.source = {};
      TemplateResult.cache.set(callsite, tokens);
    }
    this[$tokens] = tokens;
    this.source = tokens.source;
    this.values = values;
  }

  evaluate(actions) {
    let root = actions.createRoot();
    walk(0, root, this[$tokens], new Vals(this.values, actions), actions);
    return actions.finishRoot(root);
  }

}

TemplateResult.cache = new WeakMap();

// IE11's WeakMap implementation is incorrect
try {
  new WeakMap().set({}, 1).get({});
} catch (e) {
  TemplateResult.cache = new Map();
}

exports.Parser = Parser;

exports.TemplateResult = TemplateResult;

exports.html = function(callsite, ...values) {
  return new TemplateResult(callsite, values);
};

exports.createTag = function(actions) {
  return function htmlTag(literals, ...values) {
    return new TemplateResult(literals, values).evaluate(actions);
  };
};
