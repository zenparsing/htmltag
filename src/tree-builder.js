'use strict';

module.exports = {
  createRoot: function() {
    return this.createElement('#document-fragment');
  },
  finishRoot: function(root) {
    let c = root.children;
    return c.length === 1 && typeof c[0] !== 'string' ? c[0] : root;
  },
  createElement: function(tag) {
    return { tag, attributes: {}, children: [] };
  },
  finishElement: function(node) {
    return node;
  },
  createComment: function(text) {
    return { comment: text };
  },
  appendChild: function(node, child) {
    node.children.push(child);
  },
  mapValue: function(v) {
    return v;
  },
  setAttribute: function(node, name, value) {
    node.attributes[name] = value === undefined ? true : value;
  },
  setAttributes: function(node, map) {
    for (let key in map) {
      this.setAttribute(node, key, map[key]);
    }
  },
  setAttributeParts: function(node, name, parts) {
    this.setAttribute(node, name, parts.join(''));
  },
};
