'use strict';

angular.module('Lido').factory(
  'Note',
  [
    '$http', '$q', '$cacheFactory',
    function($http, $q, $cacheFactory) {
      var ENDPOINT = 'http://localhost:3000' + '/notes',
          CACHE = $cacheFactory('notes');

      var NoteFactory = function() {
        this.all = function() {
          if (CACHE.get('all')) {
            return $q.when(CACHE.get('all'));
          }
          else {
            return $http.get(ENDPOINT).then(
              function(response) {
                CACHE.put('all', response.data);
                return response.data;
              }
            );
          }
        };

        this.find = function(id) {
          if (CACHE.get(id)) {
            return $q.when(CACHE.get(id));
          }
          else {
            return $http.get(ENDPOINT + '/' + id).then(
              function(response) {
                CACHE.put(id, response.data);
                return response.data;
              }
            );
          }
        };

        this.create = function(note) {
          var data = {
            note: note
          };

          return $http.post(ENDPOINT, data).then(
            function(response) {
              return response.data;
            }
          );
        };
      };

      return new NoteFactory();
    }
  ]
);
