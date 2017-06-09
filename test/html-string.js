'use strict';

const qhtml = require('../src');
const assert = require('assert');

const html = qhtml();

{ // Attribute escaping
  assert.equal(html`
    <div id=${ 'foo-bar' } a=${ "'" }></div>
  `, '<div id="foo-bar" a="&#x27;"></div>');
}

{ // Text escaping
  assert.equal(html`
    <div>${ 'a < b' }</div>
  `, '<div>a &lt; b</div>');
}

{ // Multiple root nodes
  assert.equal(html`
    <div></div>
    <div></div>
  `, '<div><div></div>\n    <div></div></div>');
}

{ // Array children
  assert.equal(html`
    <div>
      ${ [html`<p></p>`, html`<p></p>`] }
    </div>
  `, '<div>\n      <p></p><p></p>\n    </div>');
}

{ // Text is wrapped in a div
  assert.equal(html`
    just text
  `, '<div>\n    just text\n  </div>');
}
