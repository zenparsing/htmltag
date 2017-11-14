'use strict';

const Scanner = require('./scanner');
const selfClosing = require('./self-closing');

const PLACEHOLDER = {};

function createCompiler(createElement, options = {}) {
  let cache = options.cache;
  return function htmlCompiler(literals, ...values) {
    let tokens = cache && cache.get(literals);
    if (!tokens) {
      tokens = tokenize(literals.raw);
      cache && cache.set(literals, tokens);
    }
    return compile(tokens, values, createElement, options);
  };
}

function tokenize(chunks) {
  let scanner = new Scanner();
  for (let i = 0; i < chunks.length; i++) {
    scanner.readChunk(chunks[i]);
    if (i < chunks.length - 1) {
      scanner.pushValue(PLACEHOLDER);
    }
  }
  return scanner.tokens;
}

function trimWhitespaceNodes(nodes) {
  let a = 0;
  let b = nodes.length;
  let ws = n => typeof n === 'string' && n.trim().length === 0;

  for (; a < b && ws(nodes[a]); ++a);
  for (; a < b - 1 && ws(nodes[b - 1]); --b);

  return a === b ? nodes : nodes.slice(a, b);
}

function compile(parts, values, createElement, options) {
  let root = { type: null, props: {}, children: [] };
  let hasElement = false;
  let valueIndex = 0;
  let stack = [root];
  let index = 0;
  let type;

  function peek() {
    return index < parts.length ? parts[index][0] : '';
  }

  function read() {
    let value = undefined;
    if (index < parts.length) {
      value = parts[index++][1];
      if (value === PLACEHOLDER) {
        value = values[valueIndex++];
      }
    }
    return value;
  }

  function pop() {
    if (stack.length > 1) {
      let node = stack.pop();
      let element = createElement(node.type, node.props, node.children);
      stack[stack.length - 1].children.push(element);
      hasElement = true;
    }
  }

  while ((type = peek())) {
    let node = stack[stack.length - 1];

    if (type === 'tag-start') {
      let value = read();
      if (typeof value === 'string' && value[0] === '/') {
        // Closing tag
        pop();
      } else {
        // Open tag
        stack.push({ type: value, props: {}, children: [] });
      }
    } else if (type === 'attr-key') {
      let value = read();
      if (Object(value) === value) {
        Object.keys(value).forEach(key => {
          if (!node.props[key]) {
            node.props[key] = value[key];
          }
        });
      } else {
        let propKey = value;
        let propValue = '';
        let hasValue = false;
        while (peek() === 'attr-value') {
          value = read();
          propValue = hasValue ? String(propValue) + value : value;
          hasValue = true;
        }
        if (!hasValue) {
          type = peek();
          if (type === 'tag-end' || type === 'attr-key') {
            propValue = true;
          }
        }
        if (propKey) {
          node.props[propKey] = propValue;
        }
      }
    } else if (type === 'tag-end') {
      if (read() === '/' || selfClosing(node.type)) {
        pop();
      }
    } else if (type === 'text') {
      node.children.push(read());
    } else {
      throw new Error(`Unexpected token ${ type }`);
    }
  }

  let children = trimWhitespaceNodes(root.children);
  if (hasElement && children.length === 1) {
    return children[0];
  }
  if (options.createFragment) {
    return options.createFragment(children);
  }
  throw new Error('HTML template must have exactly one root element');
}

module.exports = createCompiler;
