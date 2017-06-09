'use strict';

const createCompiler = require('../src/compiler');
const assert = require('assert');

const html = createCompiler({
  createElement(type, props, children) { return { type, props, children }; },
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

{ // Replaced tag names
  let custom = 'replaced-type';
  assert.deepEqual(html`
    <${ custom } id='c'>
      <div></div>
    </${ custom }>
  `, {
    type: 'replaced-type',
    props: { id: 'c' },
    children: [
      '\n      ',
      { type: 'div', props: {}, children: [] },
      '\n    ',
    ],
  });
}

{ // Self-closing HTML tags
  assert.deepEqual(html`
    <div><br></div>
  `, {
    type: 'div',
    props: {},
    children: [
      { type: 'br', props: {}, children: [] },
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

{ // Error if no elements and no root type
  assert.throws(() => {
    html`
      text only
    `;
  });
}

{ // Error if multiple root elements and no root type
  assert.throws(() => {
    html`
      <div></div>
      <div></div>
    `;
  });
}
