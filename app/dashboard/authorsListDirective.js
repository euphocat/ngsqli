(function () {
  'use strict';

  angular.module('home')
    .directive('authorsList', function () {
      return {
        template: '<div><h2>Authors</h2>' +
        '<span class="bg-primary tag-pill" ng-repeat="author in ctrl.authors">{{ author }}</span></div>',
        restrict: 'E',
        controller: function () {},
        bindToController: {
          authors: '='
        },
        controllerAs: 'ctrl',
        scope: {}
      }
    });

})();