(function() {
  'use strict';

  // app-2
  if (document.getElementById('app-2')) {
    window.app2 = new Vue({
      el: '#app-2',
      data: {
        message: 'You loaded this page on ' + new Date()
      }
    });
  }
})();
