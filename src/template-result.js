'use strict';

const Parser = require('./parser');
const placeholder = {};
const $tokens = typeof Symbol === 'function' ? Symbol('tokens') : '$tokens';

function TemplateResult(callsite, values) {
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

// TODO: WeakMap does not work with frozen keys in IE11
TemplateResult.cache = new WeakMap();

TemplateResult.prototype.evaluate = function(actions) {
  let root = actions.createRoot();
  walk(0, root, this[$tokens], new Vals(this.values, actions), actions);
  return actions.finishRoot(root);
};

function Vals(values, actions) {
  this.index = 0;
  this.values = values;
  this.actions = actions;
}

Vals.prototype.read = function(t) {
  if (t[1] === placeholder) {
    return this.actions.mapValue(this.values[this.index++]);
  }
  return t[1];
};

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

module.exports = TemplateResult;
