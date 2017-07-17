(function() {
  'use strict';

  // app
  if (document.getElementById('app-1')) {
    window.app = new Vue({
      el: '#app-1',
      data: {
        message: 'Hello Vue!'
      },
      created: function() {
        console.log('app: First Vue app created!');
        console.log('This instance\'s message is:', this.message);
      }
    });
  }
})();
