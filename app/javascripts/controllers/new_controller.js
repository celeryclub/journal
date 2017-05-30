'use strict';

angular.module('Lido').controller(
  'NewController',
  [
    '$scope', '$rootScope', 'Note', '$location',
    function($scope, $rootScope, Note, $location) {
      var noteChanged = false;

      $scope.changed = function() {
        console.log($scope.note)
        noteChanged = true;
      };

      $scope.save = function() {
        debugger
        Note.create($scope.note).then(
          function(note) {
            noteChanged = false;

            $location.path('/notes/' + note.id);
          }
        );
      };

      $scope.$on('$locationChangeStart', function(event, newUrl, oldUrl) {
        if (noteChanged && !confirm('Are you sure you want to leave without saving your changes?')) {
          event.preventDefault();
        }
      });
    }
  ]
);
