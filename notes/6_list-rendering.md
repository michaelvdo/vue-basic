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
You can also use the `v-for` directive as a simple iterator. This example prints the numbers 0 through 9:
```html
<div>
  <span v-for="n in 10">{{ n }} </span>
</div>
```
When combining `v-for` with `v-if`, `v-if` will be run on each iteration of the loop separately. In a sense, `v-for` therefore has higher priority than `v-if`. The next example only renders the todos that are not complete:
```html
<li v-for="todo in todos" v-if="!todo.isComplete">
  {{ todo }}
</li>
```
### Key
`:key` (or `v-bind:key`) is used to provide each repeated element with a unique id. Using this id, when the order of the items changes, instead of letting Vue reuse the DOM elements and updating their content, you can tell Vue to leave the elements' content intact and move the elements around. This is useful when you need the elements to remember their state. It's slightly slower than the default method, but it's safer.
### Array Change Detection
Several mutation methods on arrays are wrapped by Vue, so using them will trigger a re-render if necessary. Also, replacing an array value on the Vue 'instance' with a new value will trigger a (smart) re-render.
#### Caveats
Vue **cannot** detect a simple value assignment to a specific array value (`vm.items[indexOfItem] = newValue`), nor can it detect when you explicitly update the array length (`vm.items.length = newLength`). Luckily, using `Vue.set` or `Array.prototype.splice` will get around the first caveat, and `Array.prototype.splice` will also get around the second.
### Displaying Filtered/Sorted Results
Using `computed` functions or `method` functions, one can iterate over mutated data without mutating the original data:
```html
<ul>
  <li v-for="n in evenEntries">{{ n }}</li>
</ul>
<ul>
  <li v-for="n in even()">{{ n }}</li>
</ul>
```
```javascript
computed: {
  evenEntries: function() {
    return this.todos.filter(function(el, index) {
      return index % 2 === 0;
    });
  }
},
methods: {
  even: function() {
    return this.todos.filter(function(el, index) {
      return index % 2 !== 0;
    });
  }
}
```
