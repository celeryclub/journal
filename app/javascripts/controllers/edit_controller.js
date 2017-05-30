'use strict';

angular.module('Lido').controller(
  'EditController',
  [
    '$scope', '$rootScope', '$routeParams', 'Note', '$location',
    function($scope, $rootScope, $routeParams, Note, $location) {
      var noteChanged = false;

      Note.find($routeParams.note_id).then(
        function(note) {
          if (note) {
            $scope.note = note;
          }
          else {
            $rootScope.error = 'The note with the given ID could not be found.';
          }
        }
      );

      $scope.changed = function() {
        noteChanged = true;
      };

      $scope.save = function() {
        Note.update($routeParams.note_id, $scope.note).then(
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

      $scope.$on('$destroy', function() {
        $rootScope.error = null;
      });
    }
  ]
);
