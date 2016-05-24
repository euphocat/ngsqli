(function () {
  'use strict';

  angular.module('home')
    .directive('categoryPills', function () {
      return {
        template:
        '<div>' +
        '<span class="bg-primary tag-pill" ng-repeat="category in ctrl.categories">{{category}}</span></div>',
        restrict: 'E',
        controller: function ($filter) {
          var vm = this;
          vm.categories = $filter('category')(vm.category);
        },
        controllerAs: 'ctrl',
        scope: {},
        bindToController: {
          category: '='
        }
      }
    });
})();