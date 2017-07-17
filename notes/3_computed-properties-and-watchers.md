## Computed Properties and Watchers (https://vuejs.org/v2/guide/computed.html)

### Computed Properties
While you can add expressions within templates in the HMTL, it is usually a better idea to add this kind of logic to a **computed property**.

#### Basic Example
```html
<div id="example">
  <p>Original message: "{{ message }}"</p>
  <p>Computed reversed message: "{{ reversedMessage }}"</p>
</div>
```
```javascript
var vm = new Vue({
  el: '#example',
  data: {
    message: 'Hello'
  },
  computed: {
    // a computed getter
    reversedMessage: function () {
      // `this` points to the vm instance
      return this.message.split('').reverse().join('')
    }
  }
})
```
```text
Original message: "Hello"
Computed reversed message: "olleH"
```
The computed property `reversedMessage` will be used as the `[[Get]]` function for the property `vm.reversedMessage`. You can data-bind to computed properties just like a normal property. When `vm.message` changes, Vue will update `vm.reversedMessage` accordingly.

#### Computed Caching vs Methods
You can do the same as above using a `method`:
```html
<p>Reversed message: "{{ reverseMessage() }}"</p>
```
```javascript
methods: {
  reverseMessage: function () {
    return this.message.split('').reverse().join('')
  }
}
```
The end result will be exactly the same, with the exception that **computed properties are cached based on their dependencies**. Where a method will always run the function, a computed value will only re-evaluate when some of its dependencies have changed.

#### Computed vs Watched Property
In a Vue 'instance', you can imperatively `watch` some of its values. Usually, though, using computed values is more practical.

#### Computed Setter
Computed properties are by default getter-only, but you can explicitly provide a getter and setter function.

### Watchers
Using watchers, you can explicitly respond to data changes. This is most useful when you want to perform asynchronous or expensive operations in response to changing data.
