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
          { text: 'Build something awesome' }
        ]
      }
    });
  }
})();
