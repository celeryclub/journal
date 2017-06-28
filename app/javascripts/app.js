'use strict';

angular.module(
  'Lido',
  ['ng', 'ngRoute']
).
config(
  [
    '$locationProvider', '$routeProvider',
    function($locationProvider, $routeProvider) {
      $routeProvider.when(
        '/',
        {
          controller: 'HomeController',
          templateUrl: 'assets/templates/home.html'
        }
      ).when(
        '/notes/new',
        {
          controller: 'NewController',
          templateUrl: 'assets/templates/new.html'
        }
      ).when(
        '/notes/:note_id',
        {
          controller: 'EditController',
          templateUrl: 'assets/templates/edit.html'
        }
      );

      $locationProvider.html5Mode(true);
    }
  ]
);
