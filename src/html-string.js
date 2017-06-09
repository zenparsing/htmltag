'use strict';

const HTML_ESCAPES = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  '\'': '&#x27;',
  '`': '&#x60;',
};

function esc(s) {
  s = '' + (s || '');
  return /[&<>"'`]/.test(s) ? s.replace(/[&<>"'`]/g, m => HTML_ESCAPES[m]) : s;
}

function convert(x) {
  if (Array.isArray(x)) {
    return x.map(convert).join('');
  } else if (typeof x === 'string' && x[0] === '<') {
    return x;
  } else {
    return esc(x);
  }
}

function htmlStringOptions() {
  return {
    rootType: 'div',
    createElement(tag, props, children) {
      let pairs = Object.keys(props).map(k => `${ esc(k) }="${ esc(props[k]) }"`);
      let attributes = pairs.length > 0 ? ' ' + pairs.join(' ') : '';
      let inner = children.map(convert).join('');
      return `<${ tag }${ attributes }>${ inner }</${ tag }>`;
    },
  };
}

module.exports = htmlStringOptions;
