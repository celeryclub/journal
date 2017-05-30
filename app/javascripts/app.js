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
          templateUrl: 'templates/home.html'
        }
      ).when(
        '/notes/new',
        {
          controller: 'NewController',
          templateUrl: 'templates/new.html'
        }
      ).when(
        '/notes/:note_id',
        {
          controller: 'ShowController',
          templateUrl: 'templates/show.html'
        }
      ).when(
        '/notes/:note_id/edit',
        {
          controller: 'EditController',
          templateUrl: 'templates/edit.html'
        }
      );

      $locationProvider.html5Mode(true);
    }
  ]
);
