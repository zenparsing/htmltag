export class TreeBuilder {

  createRoot() {
    return this.createElement('#document-fragment');
  }

  finishRoot(root) {
    let c = root.children;
    return c.length === 1 && typeof c[0] !== 'string' ? c[0] : root;
  }

  createElement(tag) {
    return { tag, attributes: {}, children: [] };
  }

  finishElement(node) {
    return node;
  }

  createComment(text) {
    return { comment: text };
  }

  appendChild(node, child) {
    node.children.push(child);
  }

  mapValue(v) {
    return v;
  }

  setAttribute(node, name, value) {
    node.attributes[name] = value === undefined ? true : value;
  }

  setAttributes(node, map) {
    for (let key in map) {
      this.setAttribute(node, key, map[key]);
    }
  }

  setAttributeParts(node, name, parts) {
    this.setAttribute(node, name, parts.join(''));
  }

}
