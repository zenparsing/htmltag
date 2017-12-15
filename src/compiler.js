'use strict';

const Parser = require('./parser');
const PLACEHOLDER = {};

const defaultActions = {
  createRoot() {
    return this.createNode('#document-fragment');
  },
  finishRoot(root) {
    let c = root.children;
    return c.length === 1 && typeof c[0] !== 'string' ? c[0] : root;
  },
  addChild(node, child) {
    node.children.push(child);
  },
  addText(node, text) {
    this.addChild(node, text);
  },
  createNode(tag) {
    return { tag, attributes: {}, children: [] };
  },
  finishNode(node) {},
  setAttribute(node, name, value) {
    node.attributes[name] = value === undefined ? true : value;
  },
  setAttributes(node, map) {
    for (let key in map) {
      this.setAttribute(node, key, map[key]);
    }
  },
  setAttributeParts(node, name, parts) {
    this.setAttribute(node, name, parts.join(''));
  },
};

function createCompiler(createElement, options = {}) {
  let cache = options.cache;
  let actions = options.actions || defaultActions;

  function TemplateResult(source, values) {
    this.source = source;
    this.tokens = null;
    this.values = values;
  }

  TemplateResult.prototype.matches = function(other) {
    return this.source === other.source;
  };

  TemplateResult.prototype.evaluate = function() {
    if (!this.tokens) {
      let tokens = cache && cache.get(this.source);
      if (!tokens) {
        tokens = tokenize(this.source.raw);
        cache && cache.set(this.source, tokens);
      }
      this.tokens = tokens;
    }
    let root = actions.createRoot();
    walk(0, root, this.tokens, this.values, actions);
    return actions.finishRoot(root);
  };

  return function htmlCompiler(literals, ...values) {
    let result = new TemplateResult(literals, values);
    return options.defer ? result : result.evaluate();
  };
}

function tokenize(chunks) {
  let parser = new Parser();
  for (let i = 0; i < chunks.length; i++) {
    parser.parseChunk(chunks[i]);
    if (i < chunks.length - 1) {
      parser.pushValue({ _placeholder: i });
    }
  }
  return trimWhitespace(parser.tokens);
}

function trimWhitespace(tokens) {
  let a = 0;
  let b = tokens.length;

  if (b === 0) {
    return tokens;
  }

  if (wsToken(tokens[0])) { a++; }
  if (wsToken(tokens[b - 1])) { b--; }

  return a === 0 && b === tokens.length ? tokens : tokens.slice(a, b);
}

function wsToken(t) {
  return t[0] === 'text' && typeof t[1] === 'string' && (!t[1] || !t[1].trim());
}

function getValue(token, values) {
  let v = token[1];
  return typeof v._placeholder === 'number' ? values[v._placeholder] : v;
}

function closingTag(tag) {
  return typeof tag === 'string' && tag[0] === '/';
}

function walk(i, node, tokens, values, actions) {
  let attrKey = null;
  for (; i < tokens.length; ++i) {
    let t = tokens[i];
    switch (t[0]) {
      case 'tag-start': {
        let tag = getValue(t, values);
        if (closingTag(tag)) {
          while (i < tokens.length && tokens[++i][0] !== 'tag-end'); // Skip attributes
          return i;
        }
        let child = actions.createNode(tag);
        i = walk(i + 1, child, tokens, values, actions);
        actions.finishNode(child);
        actions.addChild(node, child);
        break;
      }
      case 'tag-end':
        if (t[1] === '/') { return i; }
        break;
      case 'text':
        actions.addText(node, t[1]);
        break;
      case 'attr-map':
        actions.setAttributes(node, getValue(t, values));
        break;
      case 'attr-key': {
        let name = getValue(t, values);
        switch (i + 1 < tokens.length ? tokens[i + 1][0] : '') {
          case 'attr-value':
            actions.setAttribute(node, name, getValue(tokens[++i], values));
            break;
          case 'attr-part': {
            let parts = [getValue(tokens[++i], values)];
            while (i + 1 < tokens.length && tokens[i + 1][0] === 'attr-part') {
              parts.push(getValue(tokens[++i], values));
            }
            actions.setAttributeParts(node, name, parts);
            break;
          }
          default:
            actions.setAttribute(node, name, undefined);
            break;
        }
      }
    }
  }
}

module.exports = createCompiler;
