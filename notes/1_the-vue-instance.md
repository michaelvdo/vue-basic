## The Vue Instance (https://vuejs.org/v2/guide/instance.html)

### Constructor
- You can 'create instances' by calling the 'constructor function' Vue with a constructor call.
- You can extend 'function Vue()' to create reusable component constructors (so-called constructors that can generate 'instances' of components with predefined options).

### Properties and Methods
- Each Vue 'instance' proxies all the properties in its `data` object. They are reactive, in that a change in the value on either the instance's data property or the original object will also update the other.
- Properties that are added after instantiation will not be reactive like this.
- Vue 'instances' expose a number of instance properties and methods, prefixed with `$`. Part of these properties and methods can be found on the deferred prototype of the 'instance'.
- Don't use arrow functions on an instance property or callback, since this binds `this` to a value other than the Vue 'instance'.

### Instance Lifecycle Hooks
- During initialisation of a Vue 'instance', some **lifecycle hooks** will be invoked. Using this, we can execute custom logic:

```javascript
var vm = new Vue({
  data: {
    a: 1
  },
  created: function () {
    // 'this' points to the vm instance
    console.log('a is: ' + this.a)
  }
})
// -> "a is: 1"
```

- Some examples of lifecycle hooks are `created`, `mounted`, `updated` and `destroyed`.
- All lifecycle hooks are called with their `this` context pointing to the Vue 'instance' invoking it.
