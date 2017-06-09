'use strict';

const Scanner = require('./scanner');
const selfClosing = require('./self-closing');
const htmlStringOptions = require('./html-string');

function createCompiler(options = htmlStringOptions()) {
  return function htmlCompiler(literals, ...values) {
    let scanner = new Scanner();
    for (let i = 0; i < literals.length; i++) {
      scanner.readChunk(literals[i]);
      if (i < values.length) {
        scanner.pushValue(values[i]);
      }
    }
    return compile(scanner.tokens, options);
  };
}

function trimWhitespaceNodes(nodes) {
  let a = 0;
  let b = nodes.length;
  let ws = n => typeof n === 'string' && n.trim().length === 0;

  for (; a < b && ws(nodes[a]); ++a);
  for (; a < b - 1 && ws(nodes[b - 1]); --b);

  return a === b ? nodes : nodes.slice(a, b);
}

function compile(parts, framework) {
  let root = { type: null, props: {}, children: [] };
  let hasElement = false;
  let stack = [root];
  let index = 0;

  function peek() {
    return index < parts.length ? parts[index][0] : '';
  }

  function read() {
    return index < parts.length ? parts[index++][1] : undefined;
  }

  function pop() {
    if (stack.length > 1) {
      let node = stack.pop();
      let element = framework.createElement(node.type, node.props, node.children);
      stack[stack.length - 1].children.push(element);
      hasElement = true;
    }
  }

  while (true) {
    let node = stack[stack.length - 1];
    let type = peek();

    if (!type) {
      break;
    }

    if (type === 'tag-start') {
      let value = read();
      if (value[0] === '/') {
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
        let propVal = '';
        while (peek() === 'attr-value') {
          value = read();
          propVal = propVal ? String(propVal) + value : value;
        }
        type = peek();
        if (propKey && !propVal && (type === 'tag-end' || type === 'attr-key')) {
          propVal = propKey.toLowerCase();
        }
        node.props[propKey] = propVal;
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
  let element;

  if (children.length === 1 && hasElement) {
    element = children[0];
  } else if (framework.rootType) {
    element = framework.createElement(framework.rootType, {}, children);
  } else {
    throw new Error('HTML template must have exactly one root element');
  }

  return element;
}

module.exports = createCompiler;
