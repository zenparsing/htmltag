# htmltag

An HTML parser for creating template literal tags.

## Install

```sh
npm install htmltag
```

## Usage

Use `htmltag` to create Javascript [template literal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) tags that parse HTML.

```js
const htmltag = require('htmltag');
const actions = require('htmltag/tree-builder');

const html = htmltag({ actions });

const someText = 'Hello world';

const tree = html`
  <div>${someText}</div>
`;

console.log(tree);

// { tag: 'div', attributes: {}, children: [ 'Hello world' ] }
```

## API

### htmlTag([options])

Returns a template literal tag function that parses HTML. The following options are supported:

- `actions`: An *TemplateActions* object. If this option is specified then the template tag will return the result of executing the specified actions. If this option is not specified then the template tag will return *TemplateResult* objects.
- `cache`: A optional *Map* or *WeakMap* object that will used to cache parsed HTML. If this option is not specified then no caching will occur.

### htmltag.isTemplateResult(obj)

Returns `true` if the specified argument is a TemplateResult object.

### TemplateResult objects

*TemplateResult* objects contain both the static and dynamic parts of a template and can be evaluated using *TemplateActions*.

- `source`: An opaque object representing the static content of the template.
- `evaluate(actions)`: Evaluates the HTML tree using the specified *TemplateActions* object.

### TemplateActions interface

*TemplateActions* objects are used to evaluate HTML trees and must have the following callback methods:

- `createRoot()`: Returns a root node for the resulting tree
- `createNode(tag, parent)`: Returns a node for the specified tag
- `mapValue(value)`: Maps the specified template input value to some other value
- `setAttribute(node, name, value)`: Sets a node attribute
- `setAttributes(node, attributes)`: Sets a collection of node attributes
- `setAttributeParts(node, name, parts)`: Sets a node attribute by concatenating multiple values
- `addChild(node, child)`: Adds a child to a node
- `finishNode(node)`: Called when the node is complete
- `finishRoot(root)`: Returns the result of template evaluation
