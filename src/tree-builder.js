'use strict';

module.exports = {
  createRoot() {
    return this.createNode('#document-fragment');
  },
  finishRoot(root) {
    let c = root.children;
    return c.length === 1 && typeof c[0] !== 'string' ? c[0] : root;
  },
  createNode(tag) {
    return { tag, attributes: {}, children: [] };
  },
  finishNode(node) {
    return node;
  },
  addChild(node, child) {
    node.children.push(child);
  },
  addComment(node, value) {
    node.children.push({ comment: value });
  },
  mapValue(v) {
    return v;
  },
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
