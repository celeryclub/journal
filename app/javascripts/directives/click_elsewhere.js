'use strict';

angular.module('Lido').directive(
  'clickElsewhere',
  [
    '$document', '$timeout',
    function($document, $timeout) {
      return {
        link: function(scope, element, attr) {
          var elClickHandler = function(event) {
            event.stopPropagation();
          };

          var docClickHandler = function() {
            scope.$apply(attr.clickElsewhere);
          };

          $timeout(
            function() {
              element.on('click touchstart', elClickHandler);
              $document.on('click touchstart', docClickHandler);
            }
          );

          scope.$on('$destroy', function() {
            element.off('click touchstart', elClickHandler);
            $document.off('click touchstart', docClickHandler);
          });
        }
      };
    }
  ]
);
