'use strict';

const assert = require('assert');
const createCompiler = require('../src/compiler');
const actions = require('../src/string-builder');

const html = createCompiler({ actions });

{ // Basic stringification
  assert.equal(html`
    <div class='a'>
      <span class='b'>Text</span>
    </div>
  `, `<div class="a">
      <span class="b">Text</span>
    </div>`);
}

{ // Text escaping
  assert.equal(html`<x>&</x>`, '<x>&amp;</x>');
}

{ // Raw tags
  assert.equal(html`<script>&</script>`, '<script>&</script>');
}

{ // Void tags
  assert.equal(html`<x><br /></x>`, '<x><br /></x>');
}

{ // Non-void self closing
  assert.equal(html`<x a=1 />`, '<x a="1"></x>');
}

{ // Attribute maps
  assert.equal(html`<x ${{ a: 1, b: 2 }} />`, '<x a="1" b="2"></x>');
}

{ // Attribute parts
  assert.equal(html`<x a="foo ${ 'bar' } baz" />`, '<x a="foo bar baz"></x>')
}
