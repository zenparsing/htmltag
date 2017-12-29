'use strict';

module.exports = {
  createRoot: function() {
    return this.createNode('#document-fragment');
  },
  finishRoot: function(root) {
    let c = root.children;
    return c.length === 1 && typeof c[0] !== 'string' ? c[0] : root;
  },
  createNode: function(tag) {
    return { tag, attributes: {}, children: [] };
  },
  createText: function(text) {
    return text;
  },
  createComment: function(text) {
    return { comment: text };
  },
  finishNode: function(node) {
    return node;
  },
  addChild: function(node, child) {
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
