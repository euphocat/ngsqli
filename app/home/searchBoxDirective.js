(function () {
  'use strict';

  angular.module('home')
    .directive('searchBox', function () {
      return {
        templateUrl: 'app/home/searchBox.html',
        restrict: 'E',
        controller: function () {},
        controllerAs: 'ctrl',
        scope: {},
        bindToController: {
          searchField: '='
        }
      }
    });
})();