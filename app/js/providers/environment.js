'use strict';

angular.module('Lido').factory(
  'Environment',
  [
    function() {
      return function(key) {
        var node = document.querySelector( 'meta[name="environment.' + key + '"]' );
        return node ? node.getAttribute('content') : null;
      };
    }
  ]
);
