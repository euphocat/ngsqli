(function () {
  'use strict';
  angular.module('home', ['common', 'ngRoute'])
    .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'app/home/home.html',
          controller: 'HomeCtrl',
          controllerAs: 'ctrl'
        })
        .otherwise({
          redirectTo: '/'
        });
      $locationProvider.html5Mode(true);
    }]);
})();