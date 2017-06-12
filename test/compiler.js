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
