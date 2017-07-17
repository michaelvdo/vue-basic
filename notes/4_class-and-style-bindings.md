## Class and Style Bindings (https://vuejs.org/v2/guide/class-and-style.html)

Vue enables you to manipulate an element's class list and its inline styles in a practical way using `v-bind`.

### Binding HTML Classes
`v-bind:class`.

#### Object Syntax
Using `v-bind:class`, you can dynamically toggle classes:
```html
<div v-bind:class="{ active: isActive }"></div>
```
Here, the presence of the `active` class will be determined by the truthiness of the data property `isActive`. Also, using this syntax, multiple classes can be toggled:
```html
<div class="static"
     v-bind:class="{ active: isActive, 'text-danger': hasError }">
</div>
```
The bound object can also be set in javascript:
```html
<div v-bind:class="classObject"></div>
```
```javascript
data: {
  classObject: {
    active: true,
    'text-danger': false
  }
}
```
This pattern can also be combined with **computed properties**:
```html
<div v-bind:class="classObject"></div>
```
```javascript
data: {
  isActive: true,
  error: null
},
computed: {
  classObject: function () {
    return {
      active: this.isActive && !this.error,
      'text-danger': this.error && this.error.type === 'fatal',
    }
  }
}
```

#### Array Syntax
Passing an array to `v-bind:class`:
```html
<div v-bind:class="[activeClass, errorClass]">
```
```javascript
data: {
  activeClass: 'active',
  errorClass: 'text-danger'
}
```
Which renders:
```html
<div class="active text-danger"></div>
```
Toggling a class conditionally can be done with this notation using a ternary operator:
```html
<div v-bind:class="[isActive ? activeClass : '', errorClass]">
```
However, this can be verbose and unwieldy when using it for multiple conditional classes. For this, you can use the object syntax inside the array syntax:
```html
<div v-bind:class="[{ active: isActive }, errorClass]">
```

#### With Components
When using the `class` attribute on a custom component, those classes will be added to the component's root element. Existing classes will not be overwritten.

### Binding Inline Styles
`v-bind:style`.

#### Object Syntax
```html
<div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>
```
```javascript
data: {
  activeColor: 'red',
  fontSize: 30
}
```
It is often a good idea to bind to a style object directly so that the template is cleaner. Also, the object syntax lends itself for use with **computed properties**:
```html
<div v-bind:style="styleObject"></div>
```
```javascript
data: {
  styleObject: {
    color: 'red',
    fontSize: '13px'
  }
}
```

#### Array Syntax
The array syntax allows you to apply multiple style objects to the same element:
```html
<div v-bind:style="[baseStyles, overridingStyles]">
```

#### Auto-prefixing
Vue will detect if certain styles need prefixing for the current browser.

#### Multiple Values
Starting in Vue 2.3, you can provide an array of multiple (prefixed) values to a style property:
```html
<div v-bind:style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }">
```
This will only render the last value in the array which the browser supports.
