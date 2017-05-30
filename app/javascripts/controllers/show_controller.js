'use strict';

angular.module('Lido').controller(
  'ShowController',
  [
    '$scope', '$rootScope', '$routeParams', 'Note',
    function($scope, $rootScope, $routeParams, Note) {
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

      $scope.$on('$destroy', function() {
        $rootScope.error = null;
      });
    }
  ]
);
