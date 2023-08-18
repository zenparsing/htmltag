# htmltag

An HTML-like [template literal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) tag.

## Install

```sh
npm install htmltag
```

## API

### html(callsite, ...values)

A template tag function that returns `TemplateResult` objects.

```js
import { html } from 'htmltag';

const planet = 'Earth';
const templateResult = html`<div>Hello ${planet}</div>`;

console.log(templateResult);
```

### Class: TemplateResult

`TemplateResult` objects contain both the static and dynamic parts of a template.

### templateResult.template

A tree representing the result of parsing the template.

### templateResult.values

An array of values supplied to the template literal instance.
