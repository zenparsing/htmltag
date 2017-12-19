'use strict';

const htmlEscapes = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  '\'': '&#x27;',
  '`': '&#x60;',
};

const voidTags = new RegExp(`^(?:
  area|base|basefont|bgsound|br|col|command|embed|frame|hr|
  img|input|isindex|keygen|link|meta|param|source|track|wbr
)$`.replace(/\s/g, ''), 'i');

function esc(s) {
  s = '' + (s || '');
  return /[&<>"'`]/.test(s) ? s.replace(/[&<>"'`]/g, m => htmlEscapes[m]) : s;
}

function attr(name, value) {
  if (value === null || value === undefined || value === false) {
    return '';
  }
  return ` ${esc(name)}="${esc(value === true ? name : value)}"`;
}

function isRawTag(tag) {
  return tag === 'script' || tag === 'style';
}

module.exports = {
  createRoot() {
    return { html: '' };
  },
  finishRoot(root) {
    return root.html;
  },
  createNode(tag) {
    return { tag, attributes: '', html: '' };
  },
  finishNode(node) {
    return node;
  },
  addChild(node, child) {
    if (typeof child === 'string') {
      node.html += isRawTag(node.tag) ? child : esc(child);
    } else {
      node.html += `<${child.tag}${child.attributes}`;
      if (!child.html && voidTags.test(child.tag)) {
        node.html += ' />';
      } else {
        node.html += `>${child.html}</${child.tag}>`;
      }
    }
  },
  mapValue(v) {
    return v;
  },
  setAttribute(node, name, value) {
    node.attributes += attr(name, value);
  },
  setAttributes(node, map) {
    for (let key in map) {
      node.attributes += attr(key, map[key]);
    }
  },
  setAttributeParts(node, name, parts) {
    node.attributes += attr(name, parts.join(''));
  },
};
