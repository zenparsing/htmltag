'use strict';

const Scanner = require('./scanner');
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
  let stack = [null, {}, []];
  let hasElement = false;
  let valueIndex = 0;
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

  function push(tag) {
    stack.push(tag, {}, []);
  }

  function pop() {
    if (stack.length > 3) {
      let children = stack.pop();
      let props = stack.pop();
      let tag = stack.pop();
      hasElement = true;
      pushChild(createElement(tag, props, children));
    }
  }

  function pushChild(c) {
    stack[stack.length - 1].push(c);
  }

  function setProp(key, value, force) {
    let props = stack[stack.length - 2];
    if (force || !props[key]) {
      props[key] = value;
    }
  }

  while ((type = peek())) {
    if (type === 'tag-start') {
      let value = read();
      if (typeof value === 'string' && value[0] === '/') {
        pop();
      } else {
        push(value);
      }
    } else if (type === 'attr-key') {
      let value = read();
      if (value && typeof value === 'object') {
        for (let key in value) {
          setProp(key, value[key], false);
        }
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
          setProp(propKey, propValue, true);
        }
      }
    } else if (type === 'tag-end') {
      if (read() === '/') {
        pop();
      }
    } else if (type === 'text') {
      pushChild(read());
    } else {
      throw new Error(`Unexpected token ${ type }`);
    }
  }

  let children = trimWhitespaceNodes(stack[2]);
  if (hasElement && children.length === 1) {
    return children[0];
  }

  if (options.createFragment) {
    return options.createFragment(children);
  }

  throw new Error('HTML template must have exactly one root element');
}

module.exports = createCompiler;
