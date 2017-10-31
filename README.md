# htmltag

An HTML parser for creating template literal tags.

## Install

```sh
npm install htmltag
```

## Usage

Use `htmltag` to create Javascript [template literal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) tags that parse HTML.

```js
const htmlTag = require('htmltag');

const html = htmlTag((tag, props, children) => {
  return { tag, props, children };
});

const someText = 'Hello world';

const tree = html`
  <div>${someText}</div>
`;

console.log(tree);

// { tag: 'div', props: {}, children: [ 'Hello world' ] }
```

## API

### htmlTag(createElement[, options])

Returns a template literal tag function that parses HTML. The `createElement` function is called with the following parameters:

- `tag`: The tag name of the node. This value is not limited to strings; it may be of any type.
- `props`: An object containing the attributes of the element.
- `children`: An array containing the element's children. Children can be of any type.

The following options are supported:

- `createFragment`: A function that is called with an array of children when the parsed HTML does not have a single root element. If this option is not specified, the returned function will throw an error if the parsed HTML does not have a single root element.
