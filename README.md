# htmltag

An HTML parser for creating Javascript [template literal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) literal tags.

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

Example: Evaluating a `TemplateResult` with a tree builder.

```js
import { html } from 'htmltag';
import { treeBuilder } from 'htmltag/extras';

const templateResult = html`<div>Hello Earth</div>`;

console.log(
  templateResult.evaluate(actions)
);
```

### templateResult.values

An array of values supplied to the template literal instance.

Example: Inspecting the values supplied to the template literal.

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

#### templateResult.evaluate(templateActions)

Evaluates the template result using the specified `TemplateActions` object.

Example: Evaluating a `TemplateResult` with custom actions.

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

#### templateActions.createRoot()

Returns a root not for the resulting tree.

#### templateActions.createNode(tag, parent)

Returns a node for the resulting tree.

#### templateActions.createComment(value, parent)

Returns a comment node.

#### templateActions.createText(text, parent)

Returns a text node.

#### templateActions.mapValue(value)

Maps the specified template input value to some other value.

#### templateActions.setAttribute(node, name, value)

Sets a node attribute.

#### templateActions.setAttributes(node, attributes)

Sets a collection of node attributes.

#### templateActions.setAttributeParts(node, name, parts)

Sets a node attribute by concatenating multiple values.

#### templateActions.addChild(node, child)

Adds a child to a node.

#### templateActions.finishNode(node)

Called when the node is complete.

#### templateActions.finishRoot(root)

Returns the result of template evaluation.
