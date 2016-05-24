(function () {
  'use strict';

  angular.module('home')
    .directive('categoryList', function () {
      return {
        template: '<div><h2>Categories</h2>' +
        '<span class="bg-primary tag-pill" ng-repeat="category in ctrl.categories">{{ category }}</span></div>',
        restrict: 'E',
        controller: function () {
        },
        bindToController: {
          categories: '='
        },
        controllerAs: 'ctrl',
        scope: {}
      }
    });

})();