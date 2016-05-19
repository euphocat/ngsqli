(function () {
  'use strict';
  angular.module('dashboard', ['common', 'ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
      $routeProvider
        .when('/dashboard', {
          templateUrl: 'app/dashboard/dashboard.html',
          controller: 'DashboardCtrl',
          controllerAs: 'ctrl'
        });
    }]);
})();