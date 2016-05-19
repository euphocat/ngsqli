(function () {

  'use strict';

  angular.module('bibliotheque')
    .controller('HomeCtrl', ['$http', function ($http) {

      var vm = this;

      $http.get('http://localhost:3000/back/books')
        .success(function (data/*, status, headers, config*/) {
          vm.books = data;
        });

    }]);

})();