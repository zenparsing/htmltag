'use strict';

const createCompiler = require('../src');
const assert = require('assert');
const baseActions = require('../actions');

const registry = new Map();

function register(props) {
  Object.keys(props).forEach(key => registry.set(key, props[key]));
}

const actions = Object.assign(Object.create(baseActions), {
  createNode(tag) {
    return { tag: registry.get(tag) || tag, attributes: {}, children: [] };
  },
});

const html = createCompiler({ actions });

{
  function Custom() {}
  register({ Custom });

  let result = html`
    <Custom id='foo' className='cls' />
  `;

  assert.deepEqual(result.tag, Custom);
}
