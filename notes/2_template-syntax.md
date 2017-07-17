## Template Syntax (https://vuejs.org/v2/guide/syntax.html)
- Vue uses an HTML-based template syntax. This allows you to declaratively bind the rendered DOM to the data of the underlying Vue 'instance'.

### Interpolations

#### Text
The most basic form of data binding is text interpolation using the 'Mustache' syntax:
```html
<span>Message: {{ msg }}</span>
```
The Mustache tag will be (reactively) replaced by the corresponding value of the Vue 'instance'. You can also perform one-time interpolations that do not update when the underlying data changes:
```html
<span v-once>This will never change: {{ msg }}</span>
```
Keep in mind this will affect **all** bindings on the node.

#### Raw HTML
Where the Mustache interpolation interprets the data as plain text, the `v-html` directive can interpret data as HTML:
```html
<div v-html="rawHtml"></div>
```
Any bindings in this HTML are ignored. You also cannot use `v-html` to compose template partials. Instead, use components for UI reuse and composition. Also, **never** use HTML interpolation om user-provided content to protect against XSS vulnerabilities. Only use it on trusted content.

#### Attributes
For binding 'instance' data to HTML attributes, use the v-bind directive:
```html
<div v-bind:id="dynamicId"></div>
```
This also works for boolean attributes; The attribute will be removed if the condition evaluates to a falsy value:
```html
<button v-bind:disabled="isButtonDisabled">Button</button>
```

#### Using JavaScript Expressions
You can use **single javascript expressions** inside Vue bindings (both within v-* directives as well as in Mustache bindings):
```html
{{ number + 1 }}
{{ ok ? 'YES' : 'NO' }}
{{ message.split('').reverse().join('') }}
<div v-bind:id="'list-' + id"></div>
```
These expressions will be evaluated in the data scope of the owner Vue 'instance'. The expressions are also sandboxed and only have access to a whitelist of globals. You should not attempt to access user defined globals in template expressions.

### Directives
Directives are special attributes with the `v-` prefix. Their values are expected to be **single javascript expressions**. Their job is to reactively apply side effects to the DOM when the value of its expression changes. For instance:
```html
<p v-if="seen">Now you see me</p>
```
Here, the `v-if` directive would remove/insert the `<p>` element based on the truthiness of the value expression `seen`.

#### Arguments
Some directives can take an argument, denoted by a colon after the directive name. For example:
```html
<a v-bind:href="url"></a>
<a v-on:click="doSomething">
```
Here, `href` is the argument that tells the `v-bind` directive to bind the element's `href` attribute to the value of the expression `url`. With the `v-on` directive, the argument `click` is the event name of the DOM event we should listen to for this element.

#### Modifiers
Using modifiers, you can quickly add some additional behavior to a directive:
```html
<form v-on:submit.prevent="onSubmit"></form>
```
Here, the `.prevent` modifier tells the `v-on` directive to call `event.preventDefault()` on the triggered event.

### Filters
Filters, that can be defined for each Vue 'instance', can be used to apply common text formatting. Filters can be used with Mustache interpolation or with `v-bind` expressions:
```html
<!-- in mustaches -->
{{ message | capitalize }}
<!-- in v-bind -->
<div v-bind:id="rawId | formatId"></div>
```
The filter function always receives the expression’s value as the first argument:
```javascript
new Vue({
  // ...
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  }
})
```
Filters can also be chained and can take arguments. The first argument to a filter function is always the expression's value:
```html
{{ message | filterA | filterB }}
{{ message | filterA('arg1', arg2) }}
```

### Shorthands
`v-bind` and `v-on` have shorthand notations:
```html
<!-- full syntax -->
<a v-bind:href="url"></a>
<a v-on:click="doSomething"></a>
<!-- shorthand -->
<a :href="url"></a>
<a @click="doSomething"></a>
```
