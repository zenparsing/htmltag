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
  finishNode: function(node) {
    // Empty
  },
  addChild: function(node, child) {
    node.children.push(child);
  },
  addText: function(node, text) {
    this.addChild(node, text);
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
