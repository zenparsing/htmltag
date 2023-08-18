import { html } from '../htmltag.js';
import { test, group } from './test.js';

group('Compiler', () => {

  test('Attributes', html`
    <div a=1 b='2' c=${ 3 } d='4${ 4 }4' ${{ e: 5, f: 6, a: 7 }}></div>
  `);

  test('Tag name position', html`
    <${''} id='c'>
      <div></div>
    </${''}>
  `);

  test('Closing tag doesn\'t require a name', html`
    <div>
      <${'dynamic'}>
        <span></span>
      </>
      <span></span>
    </div>
  `);

  test('Explicit self-closing tags', html`<div><a /></div>`);

  test('Flag attributes', html`<x f1 x=1 f2 />`);

  test('Boolean false attribute values', html`<x a=${ false } />`);

  test('Null attribute keys', html`<x ${ null } a=1 />`);

  test('Escapes', html`<x>&lt;tag&gt;&amp;&#x0040;&#64;</x>`);

  test('createFragment', html`
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
  `);

  test('Null tags', html`<${ null } />`);

  test('Missing closing tags', html`<div><div>`);

  test('Attributes in closing tags', html`
    <div>
      <div></div a=1>
    </div>
  `);

  test('Flag attributes', html`<div a />`);

  test('Comments', html`<div><!-- ${ 1 } ${ 2 } -->${ 3 }</div>`);

  test('Lone child', html`${'text'}`);

});
