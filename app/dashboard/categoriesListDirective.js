(function () {
  'use strict';

  angular.module('home')
    .directive('categoryList', function () {
      return {
        template: '<div><h2>Categories</h2>' +
        '<span class="bg-primary tag-pill" ng-repeat="category in ctrl.categories">{{ category }}</span></div>',
        restrict: 'E',
        controller: function ($filter, bookService) {
          var vm = this;

          bookService.getBooks()
            .success(function getCategories (books) {

              vm.categories = books
                .reduce(function (prev, next) {
                  var categories = $filter('category')(next.category);
                  return prev.concat(categories);
                }, [])
                .filter(function (value, index, self) {
                  return self.indexOf(value) === index;
                })
                .sort();

            });
        },
        controllerAs: 'ctrl',
        scope: {}
      }
    });

})();