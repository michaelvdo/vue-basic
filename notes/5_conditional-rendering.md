## Conditional Rendering (https://vuejs.org/v2/guide/conditional.html)

`v-if`

In Vue, (groups of) elements can be shown/hidden using the `v-if` directive. Using `v-else` or `v-else-if`, we can toggle one (group of) element(s) or the other:
```html
<h1 v-if="ok">Yes</h1>
```
```html
<h1 v-if="ok">Yes</h1>
<h1 v-else>No</h1>
```
For the `v-else` and `v-else-if` directives to work, they need to directly follow an element with the `v-if` (or `v-else-if`) directive.

To toggle multiple elements using the `v-if` directive, you can add it to a `<template>` element. This element acts as an invisible wrapper for the elements that need to be toggled:
```html
<template v-if="ok">
  <h1>Title</h1>
  <p>Paragraph 1</p>
  <p>Paragraph 2</p>
</template>
```

`key`
Vue reuses elements for content whenever possible. This might provide benefits for the end user, for instance when a login type is changed but the input fields remain in place with the user's filled in content, but this might not always be desirable. If this is the case, one can add a `key` directive with a unique string to tell the Vue 'instance' not to reuse that particular element but to render it anew.

`v-show`
As `v-if`, with the difference that with `v-show`, the element is always rendered but hidden using the `display` CSS property.

In general, prefer `v-show` if you need to toggle the element often and prefer `v-if` if the condition is unlikely to change at runtime.
