'use strict';

const Parser = require('./parser');

function createCompiler(actions, options) {
  let cache = options && options.cache;
  return function htmlCompiler(literals, ...values) {
    let tokens = cache && cache.get(literals);
    if (!tokens) {
      tokens = tokenize(literals.raw);
      cache && cache.set(literals, tokens);
    }
    // TODO: Defer - how?
    let result = new TemplateResult(tokens, values, actions);
    return result.evaluate();
  };
}

function TemplateResult(tokens, values, actions) {
  this.tokens = tokens;
  this.values = values;
  this.actions = actions;
}

TemplateResult.prototype.matches = function(other) {
  return this.tokens === other.tokens;
};

TemplateResult.prototype.evaluate = function() {
  let actions = this.actions;
  let root = actions.createRoot();
  walk(0, root, this.tokens, this.values, actions);
  return actions.finishRoot(root);
};

function PlaceHolder(pos) {
  this.pos = pos;
}

function tokenize(chunks) {
  let parser = new Parser();
  for (let i = 0; i < chunks.length; i++) {
    parser.parseChunk(chunks[i]);
    if (i < chunks.length - 1) {
      parser.pushValue(new PlaceHolder(i));
    }
  }
  parser.trim();
  return parser.tokens;
}

function getValue(token, values) {
  let v = token[1];
  return v instanceof PlaceHolder ? values[v.pos] : v;
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
