(function() {
  'use strict';

  // app-3
  if (document.getElementById('app-3')) {
    window.app3 = new Vue({
      el: '#app-3',
      data: {
        seen: true
      },
      methods: {
        switchVisible: function() {
          this.seen = !this.seen;
        }
      }
    });
  }
})();
