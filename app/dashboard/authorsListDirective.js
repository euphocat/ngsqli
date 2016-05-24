(function () {
  'use strict';

  angular.module('home')
    .directive('authorsList', function () {
      return {
        template: '<div><h2>Authors</h2>' +
        '<span class="bg-primary tag-pill" ng-repeat="author in ctrl.authors">{{ author }}</span></div>',
        restrict: 'E',
        controller: function (bookService) {
          var vm = this;

          bookService.getBooks()
            .success(function getAuthors (books) {
              vm.authors = books
                .map(function (book) {
                  return book.author.firstName + ' ' + book.author.lastName;
                })
                .filter(function (value, index, self) {
                  return self.indexOf(value) === index;
                });
            });
        },
        controllerAs: 'ctrl',
        scope: {}
      }
    });

})();