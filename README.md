# htmltag

An HTML parser for creating Javascript [template literal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) tags.

## Install

```sh
npm install htmltag
```

## API

### html(callsite, ...values)

A template tag function that returns `TemplateResult` objects.

```js
import { html } from 'htmltag';
import { treeBuilder } from 'htmltag/extras';

const templateResult = html`<div>Hello ${planet}</div>`;

console.log(
  templateResult.evaluate(treeBuilder);
);
```

### createTag(actions)

Returns a template literal tag function that parses and evaluates HTML.

- `actions`: An `TemplateActions` object used to evaluate the template literal.

```js
import { createTag } from 'htmltag';
import { treeBuilder } from 'htmltag/extras';

const html = createTag(treeBuilder);

console.log(
  html`<div>Hello Earth</div>`
);
```

### Class: TemplateResult

`TemplateResult` objects contain both the static and dynamic parts of a template and can be evaluated using `TemplateActions`.

```js
import { html } from 'htmltag';
import { treeBuilder } from 'htmltag/extras';

const templateResult = html`<div>Hello Earth</div>`;

console.log(
  templateResult.evaluate(treeBuilder)
);
```

### templateResult.values

An array of values supplied to the template literal instance.

```js
import { html } from 'htmltag';

const planet = 'Earth';
const templateResult = html`<div>Hello${planet}</div>`;

console.log(templateResult.values[0]); // 'Earth'
```

### templateResult.source

An opaque object identifying the template callsite. This value will be identical for identical template literals.

```js
import { html } from 'htmltag';

function render(value) {
  return html`<div>${value}</div>`;
}

const result1 = render(1);
const result2 = render(2);

console.log(result1.source === result2.source); // true
```

### templateResult.evaluate(templateActions)

Evaluates the template result using the specified `TemplateActions` object.

```js
import { html } from 'htmltag';
import actions from './custom-actions';

const planet = 'Earth';
const templateResult = html`<div>Hello ${planet}</div>`;

console.log(
  templateResult.evaluate(actions)
);
```

### Interface: TemplateActions

`TemplateActions` objects are used to evaluate HTML trees and must have each of the following callback methods:

```js

class CustomActions {

  createRoot() {
    // Creates a root node for the resulting tree
  }

  createElement(tag, parent) {
    // Creates an element node
  }

  createComment(value, parent) {
    // Creates a comment node
  }

  mapValue(input) {
    // Maps the specified template input value to some other value
  }

  setAttribute(node, name, value) {
    // Sets a node attribute
  }

  setAttributes(node, attributes) {
    // Sets a collection of node attributes
  }

  setAttributeParts(node, name, parts) {
    // Sets a node attribute by concatenating multiple values
  }

  appendChild(node, child) {
    // Adds a child to a node
  }

  finishElement(node) {
    // Called when the element is complete
  }

  finishRoot(root) {
    // Returns the result of template evaluation
  }

}
```
