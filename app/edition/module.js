(function () {
  'use strict';
  angular.module('edition', ['common', 'ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
      $routeProvider
        .when('/edition/:id', {
          templateUrl: 'app/edition/edition.html',
          controller: 'EditionCtrl',
          controllerAs: 'ctrl'
        })
        .when('/edition', {
          templateUrl: 'app/edition/edition.html',
          controller: 'EditionCtrl',
          controllerAs: 'ctrl'
        });
    }]);
})();