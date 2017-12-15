'use strict';

const createCompiler = require('../src/compiler');
const assert = require('assert');

const html = createCompiler();

{ // Attributes
  assert.deepEqual(html`
    <div a=1 b='2' c=${ 3 } d='4${ 4 }4' ${{ e: 5, f: 6, a: 7 }}></div>
  `, {
    tag: 'div',
    attributes: { a: 7, b: '2', c: 3, d: '444', e: 5, f: 6 },
    children: [],
  });
}

{ // Dynamic tag names
  let custom = 'dynamic-type';
  assert.deepEqual(html`
    <${ custom } id='c'>
      <div></div>
    </${ custom }>
  `, {
    tag: 'dynamic-type',
    attributes: { id: 'c' },
    children: [
      '\n      ',
      { tag: 'div', attributes: {}, children: [] },
      '\n    ',
    ],
  });
}

{ // Closing tag doesn't require a name
  assert.deepEqual(html`
    <div>
      <${'dynamic'}>
        <span></span>
      </>
      <span></span>
    </div>
  `, {
    tag: 'div',
    attributes: {},
    children: [
      '\n      ',
      {
        tag: 'dynamic',
        attributes: {},
        children: [
          '\n        ',
          { tag: 'span', attributes: {}, children: [] },
          '\n      ',
        ],
      },
      '\n      ',
      { tag: 'span', attributes: {}, children: [] },
      '\n    ',
    ],
  });
}

{ // Explicit self-closing tags
  assert.deepEqual(html`
    <div><a /></div>
  `, {
    tag: 'div',
    attributes: {},
    children: [
      { tag: 'a', attributes: {}, children: [] },
    ],
  });
}

/*
{ // Error if no elements
  assert.throws(() => {
    html`
      text only
    `;
  });
}

{ // Error if multiple root elements
  assert.throws(() => {
    html`
      <div></div>
      <div></div>
    `;
  });
}
*/

{ // Flag attributes
  assert.deepEqual(html`
    <x f1 x=1 f2 />
  `, {
    tag: 'x',
    attributes: {
      f1: true,
      x: 1,
      f2: true,
    },
    children: [],
  });
}

{ // Boolean false attribute values
  assert.deepEqual(html`
    <x a=${ false } />
  `, {
    tag: 'x',
    attributes: { a: false },
    children: [],
  });
}

{ // Null attribute keys
  assert.deepEqual(html`
    <x ${ null } a=1 />
  `, {
    tag: 'x',
    attributes: { a: '1' },
    children: [],
  });
}

{ // Escapes
  assert.deepEqual(html`<x>\<tag\>\&\u0040\x40</x>`, {
    tag: 'x',
    attributes: {},
    children: ['<tag>&@@'],
  });
}

{ // createFragment
  assert.deepEqual(html`
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
  `, {
    tag: '#document-fragment',
    attributes: {},
    children: [
      { tag: 'li', attributes: {}, children: ['One'] },
      '\n    ',
      { tag: 'li', attributes: {}, children: ['Two'] },
      '\n    ',
      { tag: 'li', attributes: {}, children: ['Three'] },
    ],
  });
}

{ // Null tags
  assert.deepEqual(html`<${ null } />`, { tag: null, attributes: {}, children: [] });
}

{ // Missing closing tags
  assert.deepEqual(html`<div><div>`, {
    tag: 'div',
    attributes: {},
    children: [{
      tag: 'div',
      attributes: {},
      children: [],
    }],
  });
}

{ // Attributes in closing tags
  assert.deepEqual(html`
    <div>
      <div></div a=1>
    </div>
  `, {
    tag: 'div',
    attributes: {},
    children: [
      '\n      ',
      {
        tag: 'div',
        attributes: {},
        children: [],
      },
      '\n    ',
    ],
  });
}
