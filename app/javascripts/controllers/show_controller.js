'use strict';

angular.module('Lido').controller(
  'ShowController',
  [
    '$scope', '$rootScope', '$routeParams', '$location', 'Note',
    function($scope, $rootScope, $routeParams, $location, Note) {
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

      $scope.edit = function() {
        $location.path('/notes/' + $scope.note.id + '/edit');
      };

      $scope.$on('$destroy', function() {
        $rootScope.error = null;
      });
    }
  ]
);
