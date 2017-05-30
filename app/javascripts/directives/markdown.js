'use strict';

angular.module('Lido').directive(
  'markdown',
  [
    function() {
      var converter = new showdown.Converter();

      return {
        restrict: 'A',
        link: function(scope, element, attrs) {
          scope.$watch(
            attrs.markdown,
            function(newMarkdown) {
              if (newMarkdown) {
                element.html(converter.makeHtml(newMarkdown));
              }
            }
          );
        }
      };
    }
  ]
);
