(function() {
  'use strict';

  // app-7
  if (document.getElementById('app-7')) {
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
  }
})();
