'use strict';

const createCompiler = require('../src/compiler');
const assert = require('assert');

const html = createCompiler((type, props, children) => {
  return { type, props, children };
});

{ // Attributes
  assert.deepEqual(html`
    <div a=1 b='2' c=${ 3 } d='4${ 4 }4' ${{ e: 5, f: 6, a: 7 }}></div>
  `, {
    type: 'div',
    props: { a: '1', b: '2', c: 3, d: '444', e: 5, f: 6 },
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
    type: 'dynamic-type',
    props: { id: 'c' },
    children: [
      '\n      ',
      { type: 'div', props: {}, children: [] },
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
    type: 'div',
    props: {},
    children: [
      '\n      ',
      {
        type: 'dynamic',
        props: {},
        children: [
          '\n        ',
          { type: 'span', props: {}, children: [] },
          '\n      ',
        ],
      },
      '\n      ',
      { type: 'span', props: {}, children: [] },
      '\n    ',
    ],
  });
}

{ // Explicit self-closing tags
  assert.deepEqual(html`
    <div><a /></div>
  `, {
    type: 'div',
    props: {},
    children: [
      { type: 'a', props: {}, children: [] },
    ],
  });
}

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

{ // Flag attributes
  assert.deepEqual(html`
    <x f1 x=1 f2 />
  `, {
    type: 'x',
    props: {
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
    type: 'x',
    props: { a: false },
    children: [],
  });
}

{ // Null attribute keys
  assert.deepEqual(html`
    <x ${ null } a=1 />
  `, {
    type: 'x',
    props: { a: '1' },
    children: [],
  });
}

{ // Escapes
  assert.deepEqual(html`<x>\<tag\>\&\u0040\x40</x>`, {
    type: 'x',
    props: {},
    children: ['<tag>&@@'],
  });
}

{ // createFragment
  let html = createCompiler((type, props, children) => {
    return { type, props, children };
  }, {
    createFragment(children) {
      return { type: '#fragment', props: {}, children };
    },
  });

  assert.deepEqual(html`
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
  `, {
    type: '#fragment',
    props: {},
    children: [
      { type: 'li', props: {}, children: ['One'] },
      '\n    ',
      { type: 'li', props: {}, children: ['Two'] },
      '\n    ',
      { type: 'li', props: {}, children: ['Three'] },
    ],
  });
}

{ // Null tags
  assert.deepEqual(html`<${ null } />`, { type: null, props: {}, children: [] });
}

{ // Missing closing tags
  assert.deepEqual(html`<div><div>`, {
    type: 'div',
    props: {},
    children: [{
      type: 'div',
      props: {},
      children: [],
    }],
  });
}
