(function() {
  'use strict';

  // app-4
  if (document.getElementById('app-4')) {
    window.app4 = new Vue({
      el: '#app-4',
      data: {
        todos: [
          { text: 'Learn JavaScript' },
          { text: 'Learn Vue' },
          { text: 'Build something awesome' },
          { text: 'Foo' },
          { text: 'Bar' }
        ],
        person: {
          firstName: 'Michael',
          lastName: 'van den Oudenalder',
          age: 30
        }
      },
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
    });
  }
})();
