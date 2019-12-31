'use strict';

const assert = require('assert');
const { createTag } = require('../');
const { TreeBuilder } = require('../extras.js');

const registry = new Map();

function register(props) {
  Object.keys(props).forEach(key => registry.set(key, props[key]));
}

class Actions extends TreeBuilder {
  createElement(tag) {
    return { tag: registry.get(tag) || tag, attributes: {}, children: [] };
  }
}

const html = createTag(new Actions());

{
  function Custom() {}
  register({ Custom });

  let result = html`
    <Custom id='foo' className='cls' />
  `;

  assert.deepEqual(result.tag, Custom);
}
