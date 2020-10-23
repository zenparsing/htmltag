import * as assert from 'assert';
import { createTag } from '../htmltag.js';
import { TreeBuilder } from '../extras.js';

const html = createTag(new TreeBuilder());

{ // Attributes
  assert.deepStrictEqual(html`
    <div a=1 b='2' c=${ 3 } d='4${ 4 }4' ${{ e: 5, f: 6, a: 7 }}></div>
  `, {
    tag: 'div',
    attributes: { a: 7, b: '2', c: 3, d: '444', e: 5, f: 6 },
    children: [],
  });
}

{ // Dynamic tag names
  let custom = 'dynamic-type';
  assert.deepStrictEqual(html`
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
  assert.deepStrictEqual(html`
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
  assert.deepStrictEqual(html`
    <div><a /></div>
  `, {
    tag: 'div',
    attributes: {},
    children: [
      { tag: 'a', attributes: {}, children: [] },
    ],
  });
}

{ // Flag attributes
  assert.deepStrictEqual(html`
    <x f1 x=1 f2 />
  `, {
    tag: 'x',
    attributes: {
      f1: true,
      x: '1',
      f2: true,
    },
    children: [],
  });
}

{ // Boolean false attribute values
  assert.deepStrictEqual(html`
    <x a=${ false } />
  `, {
    tag: 'x',
    attributes: { a: false },
    children: [],
  });
}

{ // Null attribute keys
  assert.deepStrictEqual(html`
    <x ${ null } a=1 />
  `, {
    tag: 'x',
    attributes: { a: '1' },
    children: [],
  });
}

{ // Escapes
  assert.deepStrictEqual(html`<x>&lt;tag&gt;&amp;&#x0040;&#64;</x>`, {
    tag: 'x',
    attributes: {},
    children: ['<tag>&@@'],
  });
}

{ // createFragment
  assert.deepStrictEqual(html`
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
  assert.deepStrictEqual(html`<${ null } />`, { tag: null, attributes: {}, children: [] });
}

{ // Missing closing tags
  assert.deepStrictEqual(html`<div><div>`, {
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
  assert.deepStrictEqual(html`
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

{ // Flag attributes
  assert.deepStrictEqual(html`<div a />`, {
    tag: 'div',
    attributes: { a: true },
    children: [],
  });
}

{ // Comments
  assert.deepStrictEqual(html`<div><!-- ${ 1 } ${ 2 } -->${ 3 }</div>`, {
    tag: 'div',
    attributes: {},
    children: [
      { comment: ' ' },
      { comment: 1 },
      { comment: ' ' },
      { comment: 2 },
      { comment: ' ' },
      3,
    ],
  });
}
