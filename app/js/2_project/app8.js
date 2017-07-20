(function() {
  'use strict';

  // app-8
  if (document.getElementById('app-8')) {
    window.app8 = new Vue({
      el: '#app-8',
      data: {
        message: 'Hello!'
      },
      computed: {
        reversedMessage: function() {
          return this.message.split('').reverse().join('');
        }
      },
      filters: {
        reverse: function(value) {
          if (!value) return '';
          value = value.toString();
          return value.split('').reverse().join('');
        }
      },
      computed: {
        reverseMessage: function() {
          return this.message.split('').reverse().join('');
        }
      }
    });
  }
})();
