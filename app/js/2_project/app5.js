(function() {
  'use strict';

  // app-5
  if (document.getElementById('app-5')) {
    window.app5 = new Vue({
      el: '#app-5',
      data: {
        message: 'Hello Vue.js!',
        count: 0
      },
      methods: {
        reverseMessage: function () {
          this.message = this.message.split('').reverse().join('');
        },
        escape: function() {
          this.count++;
        }
      }
    });
  }
})();
