function makeEnum(i = 0) {
  return new Proxy({}, { get() { return i++; } });
}

const {
  S_TEXT,
  S_RAW,
  S_OPEN,
  S_ATTR,
  S_ATTR_CLOSE,
  S_ATTR_KEY,
  S_ATTR_KEY_WS,
  S_ATTR_VALUE_WS,
  S_ATTR_VALUE,
  S_ATTR_VALUE_SQ,
  S_ATTR_VALUE_DQ,
  S_COMMENT,
} = makeEnum();

const ESC_RE = /&(?:(lt|gt|amp|quot)|#([0-9]+)|#x([0-9a-f]+));?/ig;

const NAMED_REFS = { lt: '<', gt: '>', amp: '&', quot: '"' };

function notReached(msg) {
  throw new Error(msg);
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

function escape(value) {
  return value.replace(ESC_RE, (m, name, dec, hex) => name
    ? NAMED_REFS[name.toLowerCase()]
    : String.fromCharCode(parseInt(dec || hex, hex ? 16 : 10)));
}

function maybeEscape(hasEscape, text) {
  return hasEscape ? escape(text) : text;
}

class ParseNode {
  constructor(kind) {
    this.kind = kind;
    this.tag = '';
    this.attributes = [];
    this.children = [];
  }
}

class Attribute {
  constructor(kind, name, value) {
    this.kind = kind;
    this.name = name;
    this.value = value;
  }
}

export class Parser {
  constructor() {
    this.node = new ParseNode('root');
    this.stack = [this.node];
    this.state = S_TEXT;
    this.attrName = '';
    this.attrParts = [];
    this.tag = '';
    this.closing = false;
  }

  addAttr(value) {
    this.node.attributes.push(new Attribute('static', this.attrName, value));
  }

  addAttrParts() {
    let attr = new Attribute('parts', this.attrName, this.attrParts);
    this.node.attributes.push(attr);
    this.attrParts = [];
  }

  parseChunk(chunk) {
    let state = this.state;
    let attrPart = state === S_ATTR_VALUE_DQ || state === S_ATTR_VALUE_SQ;
    let hasEscape = false;
    let a = 0;
    let b = 0;

    for (; b < chunk.length; ++b) {
      let c = chunk[b];
      if (state === S_RAW) {
        if (c === '>' && rmatch(chunk, b, '</' + this.tag)) {
          b -= this.tag.length + 3; // Rewind to closing tag
          state = S_TEXT;
        }
      } else if (state === S_COMMENT) {
        if (c === '>' && rmatch(chunk, b, '--')) {
          // Comments are ignored
          state = S_TEXT;
          hasEscape = false;
          a = b + 1;
        }
      } else if (c === '&') {
        hasEscape = true;
      } else if (state === S_TEXT) {
        if (c === '<') {
          if (b > a) {
            let text = maybeEscape(hasEscape, chunk.slice(a, b));
            this.node.children.push(text);
          }
          state = S_OPEN;
          hasEscape = false;
          this.closing = false;
          a = b + 1;
        }
      } else if (state === S_ATTR_VALUE_SQ) {
        if (c === "'") {
          let value = maybeEscape(hasEscape, chunk.slice(a, b));
          if (attrPart) {
            this.attrParts.push(value);
            this.addAttrParts();
            attrPart = false;
          } else {
            this.addAttr(value);
          }
          state = S_ATTR;
          hasEscape = false;
          this.attrName = '';
          a = b + 1;
        }
      } else if (state === S_ATTR_VALUE_DQ) {
        if (c === '"') {
          let value = maybeEscape(hasEscape, chunk.slice(a, b));
          if (attrPart) {
            this.attrParts.push(value);
            this.addAttrParts();
            attrPart = false;
          } else {
            this.addAttr(value);
          }
          state = S_ATTR;
          hasEscape = false;
          this.attrName = '';
          a = b + 1;
        }
      } else if (c === '>') {
        if (state === S_OPEN) {
          this.tag = maybeEscape(hasEscape, chunk.slice(a, b));
          if (!this.closing) {
            this.pushNode();
          }
        } else if (state === S_ATTR_KEY) {
          this.attrName = maybeEscape(hasEscape, chunk.slice(a, b));
          this.addAttr(true);
        } else if (state === S_ATTR_KEY_WS) {
          this.addAttr(true);
        } else if (state === S_ATTR_VALUE) {
          this.addAttr(maybeEscape(hasEscape, chunk.slice(a, b)));
        } else if (state === S_ATTR_VALUE_WS) {
          this.addAttr(true);
        }
        if (this.closing || rmatch(chunk, b, '/')) {
          // Closing or self-closing tag
          this.popNode();
          state = S_TEXT;
        } else {
          state = rawTag(this.tag) ? S_RAW : S_TEXT;
        }
        hasEscape = false;
        a = b + 1;
      } else if (state === S_OPEN) {
        if (c === '-' && chunk.slice(a, b) === '!-') {
          state = S_COMMENT;
          a = b + 1;
        } else if (c === '/' && b === a) {
          this.closing = true;
        } else if (!attrChar(c)) {
          this.tag = maybeEscape(hasEscape, chunk.slice(a, b));
          if (this.closing) {
            state = S_ATTR_CLOSE;
          } else {
            this.pushNode();
            state = S_ATTR;
          }
          hasEscape = false;
          a = b + 1;
        }
      } else if (state === S_ATTR_CLOSE) {
        // Ignore attributes in closing tags
      } else if (state === S_ATTR) {
        if (attrChar(c)) {
          state = S_ATTR_KEY;
          a = b;
        }
      } else if (state === S_ATTR_KEY) {
        if (c === '=') {
          this.attrName = maybeEscape(hasEscape, chunk.slice(a, b));
          hasEscape = false;
          state = S_ATTR_VALUE_WS;
          a = b + 1;
        } else if (!attrChar(c)) {
          this.attrName = maybeEscape(hasEscape, chunk.slice(a, b));
          hasEscape = false;
          state = S_ATTR_KEY_WS;
          a = b + 1;
        }
      } else if (state === S_ATTR_KEY_WS) {
        if (c === '=') {
          state = S_ATTR_VALUE_WS;
          a = b + 1;
        } else if (attrChar(c)) {
          this.addAttr(true);
          state = S_ATTR_KEY;
          a = b;
        }
      } else if (state === S_ATTR_VALUE_WS) {
        if (c === '"') {
          state = S_ATTR_VALUE_DQ;
          a = b + 1;
        } else if (c === "'") {
          state = S_ATTR_VALUE_SQ;
          a = b + 1;
        } else if (attrChar(c)) {
          state = S_ATTR_VALUE;
          a = b;
        }
      } else if (state === S_ATTR_VALUE) {
        if (!attrChar(c)) {
          this.addAttr(maybeEscape(hasEscape, chunk.slice(a, b)));
          hasEscape = false;
          state = S_ATTR;
          a = b + 1;
        }
      }
    }

    if (state === S_TEXT || state === S_RAW) {
      if (a < b) {
        let text = maybeEscape(hasEscape, chunk.slice(a, b));
        this.node.children.push(text);
      }
    } else if (state === S_COMMENT) {
      // Comments are ignored
    } else if (state === S_OPEN) {
      this.tag = maybeEscape(hasEscape, chunk.slice(a, b));
      if (this.closing) {
        state = S_ATTR_CLOSE;
      } else {
        this.pushNode();
        state = S_ATTR;
      }
    } else if (state === S_ATTR_KEY) {
      this.attrName = maybeEscape(hasEscape, chunk.slice(a, b));
      state = S_ATTR;
    } else if (state === S_ATTR_KEY_WS) {
      state = S_ATTR;
    } else if (state === S_ATTR_VALUE) {
      this.addAttr(maybeEscape(hasEscape, chunk.slice(a, b)));
      state = S_ATTR;
    } else if (state === S_ATTR_VALUE_SQ || state === S_ATTR_VALUE_DQ) {
      let value = maybeEscape(hasEscape, chunk.slice(a, b));
      this.attrParts.push(value);
    }

    this.state = state;
  }

  pushNode() {
    let node = new ParseNode('element');
    node.tag = this.tag;
    this.node.children.push(node);
    this.node = node;
    this.stack.push(node);
  }

  popNode() {
    if (this.stack.length > 1) {
      this.stack.pop();
      this.node = this.stack[this.stack.length - 1];
    }
  }

  addSlot() {
    switch (this.state) {
      case S_TEXT:
      case S_RAW:
        this.node.children.push(new ParseNode('child-slot'));
        break;
      case S_COMMENT:
        this.node.children.push(new ParseNode('null-slot'));
        break;
      case S_ATTR:
        this.node.attributes.push(new Attribute('map', '', ''));
        break;
      case S_ATTR_CLOSE:
        this.node.attributes.push(new Attribute('null', '', ''));
        break;
      case S_ATTR_VALUE_WS:
        this.node.attributes.push(new Attribute('value', this.attrName, ''));
        this.state = S_ATTR;
        break;
      case S_ATTR_VALUE_SQ:
      case S_ATTR_VALUE_DQ:
        // Slots will be added when the next chunk is parsed
        break;
      default:
        notReached('Unexpected parser state');
        break;
    }
  }

  end() {
    if (this.attrParts.length > 0) { this.addAttrParts(); }
    while (this.stack.length > 1) { this.popNode(); }
    return this.node;
  }
}

function parse(chunks) {
  let parser = new Parser();
  if (chunks.length > 0) {
    parser.parseChunk(chunks[0]);
    for (let i = 1; i < chunks.length; i++) {
      parser.addSlot();
      parser.parseChunk(chunks[i]);
    }
  }
  return parser.end();
}

export class TemplateResult {
  constructor(template, values) {
    this.template = template;
    this.values = values;
  }
}

TemplateResult.cache = new WeakMap();

export function html(callsite, ...values) {
  let template = TemplateResult.cache.get(callsite);
  if (!template) {
    template = parse(callsite.raw);
    TemplateResult.cache.set(callsite, template);
  }
  return new TemplateResult(template, values);
}
