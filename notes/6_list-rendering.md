## List Rendering (https://vuejs.org/v2/guide/list.html)

```html
<ul id="example-2">
  <li v-for="(item, index) in items">
    {{ parentMessage }} - {{ index }} - {{ item.message }}
  </li>
</ul>
```
```javascript
var example2 = new Vue({
  el: '#example-2',
  data: {
    parentMessage: 'Parent',
    items: [
      { message: 'Foo' },
      { message: 'Bar' }
    ]
  }
});
```
```text
Parent - 0 - Foo
Parent - 1 - Bar
```

Instead of `in`, you can also use `of`, but only for use on arrays:
```html
<div v-for="item of items"></div>
```
You can use the `v-for` directive on `<template>` elements. Also, you can use it on javascript objects, although the order of the rendered items is not guaranteed to be the same across all javascript engine implementations. Note that for the object use, you can pass in a `key` as the second parameter and an `index` as the third:
```html
<div v-for="(value, key, index) in object">
  {{ index }}. {{ key }} : {{ value }}
</div>
```
