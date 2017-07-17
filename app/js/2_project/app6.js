(function() {
  'use strict';

  // app-6
  if (document.getElementById('app-6')) {
    window.app6 = new Vue({
      el: '#app-6',
      data: {
        message: 'Hello Vue!'
      }
    });
  }
})();
