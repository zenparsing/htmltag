import { html } from '../htmltag.js';
import { test, group } from './test.js';

group('Parser', () => {

  test('Tags and attributes', html`<tag a=x b=1 c="y" d='z'></tag>`);

  test('Explicit self-closing', html`<x />`);

  test('Exclicit self-closing with no space', html`<x/>`);

  test('Comment', html`<!--test-->`);

  test('Comment with slot', html`<!--${''}-->`);

  test('Comment with multiple slots', html`<!--a${'b'}c${''}d-->`);

  test('Strange tag name with !--', html`<a!-- />`);

  test('Attribute key WS before />', html`<x a />`);

  test('Raw tag: script', html`<script>console.log("<tag>")</script>`);

  test('Raw tag with values', html`<script>a${'b'}c</script>`);

  test('Raw self-closing', html`<script /><x></x>`);

  test('Raw tag: style', html`<style>a { content: "<tag>" }</style>`);

  test('Character escapes', html`<x>&lt;tag&gt;&amp;&quot;</x>`);

  test('Decimal escapes', html`<x>&#64;</x>`);

  test('Hex escapes', html`<x>&#x40;</x>`);

  test('Unicode escapes', html`<x>&#x0040 &lt &amp</x>`);

  test('Missing semicolon in escape', html`<x>&#x0040</x>`);

  test('Unknown named reference', html`&foobar;`);

  test('No escapes in raw', html`<script>&#x0040</script>`);

  test('Strange 1', html`<a b=/>`);

  test('Strange 2', html`<x /=y=1></x>`);

  test('Missing closing tag name', html`<x>a</>`);

  test('Attribute parts DQ', html`<x y="a${'b'}c${'d'}e" />`);

  test('Attribute parts SQ', html`<x y='a${'b'}c${'d'}e' />`);

  test('Attribute parts must be quoted', html`<x y=a${'b'}c />`);

  test('Attribute maps', html`<x${'map'}/>`);

  test('Strange self-closing bug', html`
    <path></path>
    <path id='r2'>
      <animate />
    </path>
  `);


});
