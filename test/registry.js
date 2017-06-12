'use strict';

const quasiHTML = require('../src');
const assert = require('assert');

const registry = new Map();

function register(props) {
  Object.keys(props).forEach(key => registry.set(key, props[key]));
}

const html = quasiHTML((type, props, children) => {
  return { type: registry.get(type) || type, props, children };
});

{
  function Custom() {}
  register({ Custom });

  let result = html`
    <Custom id='foo' className='cls' />
  `;

  assert.deepEqual(result.type, Custom);
}
