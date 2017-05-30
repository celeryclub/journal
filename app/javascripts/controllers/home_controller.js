'use strict';

angular.module('Lido').controller(
  'HomeController',
  [
    '$scope', 'Note',
    function($scope, Note) {
      Note.all().then(
        function(notes) {
          $scope.notes = notes;
        }
      );
    }
  ]
);
