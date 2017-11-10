'use strict';

angular.module('Lido').controller(
  'NewController',
  [
    '$scope', '$rootScope', 'Note', '$location',
    function($scope, $rootScope, Note, $location) {
      $scope.note = {};

      var noteChanged = false;

      $scope.changed = function() {
        console.log($scope.note)
        noteChanged = true;
      };

      $scope.save = function() {
        if (noteChanged) {
          Note.create($scope.note).then(
            function(note) {
              noteChanged = false;

              $location.path('/notes/' + note.id);
            }
          );
        }
        else {
          $location.path('/notes/' + $scope.note.id);
        }
      };

      $scope.$on('$locationChangeStart', function(event, newUrl, oldUrl) {
        if (noteChanged && !confirm('Are you sure you want to leave without saving your changes?')) {
          event.preventDefault();
        }
      });
    }
  ]
);
