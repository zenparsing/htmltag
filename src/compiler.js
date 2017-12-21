'use strict';

const Parser = require('./parser');
const PLACEHOLDER = {};

function createCompiler(options = {}) {
  let cache = options.cache;
  return function htmlCompiler(literals, ...values) {
    let tokens = cache && cache.get(literals);
    if (!tokens) {
      tokens = tokenize(literals.raw);
      tokens.source = {};
      cache && cache.set(literals, tokens);
    }
    let result = new TemplateResult(tokens, values);
    return options.actions ? result.evaluate(options.actions) : result;
  };
}

createCompiler.isTemplateResult = function(obj) {
  return obj instanceof TemplateResult;
};

function TemplateResult(tokens, values) {
  this.tokens = tokens;
  this.values = values;
  this.source = tokens.source;
}

TemplateResult.prototype.evaluate = function(actions) {
  let root = actions.createRoot();
  walk(0, root, this.tokens, new Vals(this.values, actions), actions);
  return actions.finishRoot(root);
};

function tokenize(chunks) {
  if (chunks.length === 0) {
    return [];
  }
  let parser = new Parser();
  parser.parseChunk(chunks[0]);
  for (let i = 1; i < chunks.length; i++) {
    parser.pushValue(PLACEHOLDER);
    parser.parseChunk(chunks[i]);
  }
  return parser.end();
}

function Vals(values, actions) {
  this.index = 0;
  this.values = values;
  this.actions = actions;
}

Vals.prototype.read = function(t) {
  if (t[1] === PLACEHOLDER) {
    return this.actions.mapValue(this.values[this.index++]);
  }
  return t[1];
};

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
        let child = actions.createNode(tag, node);
        i = walk(i + 1, child, tokens, vals, actions);
        actions.addChild(node, actions.finishNode(child));
        break;
      }
      case 'tag-end':
        if (t[1] === '/') { return i; }
        break;
      case 'text':
        actions.addChild(node, vals.read(t));
        break;
      case 'comment':
        actions.addComment(node, vals.read(t));
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

module.exports = createCompiler;
