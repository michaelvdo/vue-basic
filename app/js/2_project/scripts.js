(function() {
  'use strict';

  // app
  window.app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!'
    },
    created: function() {
      console.log('First Vue app created!');
      console.log('This instance\'s message is:', this.message);
    }
  });

  // app-2
  window.app2 = new Vue({
    el: '#app-2',
    data: {
      message: 'You loaded this page on ' + new Date()
    }
  });

  // app-3
  window.app3 = new Vue({
    el: '#app-3',
    data: {
      seen: true
    }
  });

  // app-4
  window.app4 = new Vue({
    el: '#app-4',
    data: {
      todos: [
        { text: 'Learn JavaScript' },
        { text: 'Learn Vue' },
        { text: 'Build something awesome' }
      ]
    }
  });

  // app-5
  window.app5 = new Vue({
    el: '#app-5',
    data: {
      message: 'Hello Vue.js!'
    },
    methods: {
      reverseMessage: function () {
        this.message = this.message.split('').reverse().join('');
      }
    }
  });

  // app-6
  window.app6 = new Vue({
    el: '#app-6',
    data: {
      message: 'Hello Vue!'
    }
  });

  // app-7
  Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
  });

  window.app7 = new Vue({
    el: '#app-7',
    data: {
      groceryList: [
        { id: 0, text: 'Vegetables' },
        { id: 1, text: 'Cheese' },
        { id: 2, text: 'Whatever else humans are supposed to eat' }
      ]
    }
  });

})();
