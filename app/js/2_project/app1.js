(function() {
  'use strict';

  // component
  const Child = {
    props: ['parentMsg'],
    template: '<span>{{ parentMsg }}</span>'
  };

  // app
  if (document.getElementById('app-1')) {
    window.app = new Vue({
      el: '#app-1',
      data: {
        message: 'Hello Vue!',
        parentMsg: 'I\'m a child element!'
      },
      created: function() {
        console.log('app: First Vue app created!');
        console.log('This instance\'s message is:', this.message);
      },
      components: {
        'child': Child
      }
    });
  }
})();
