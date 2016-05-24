(function () {

  'use strict';

  angular.module('dashboard')
    .controller('DashboardCtrl', ['bookService', '$q', function (bookService, $q) {

      var vm = this;

      var categoriesPromise = bookService.getUniqueCategories()
        .then(function (uniqueCategories) {
          vm.categories = uniqueCategories;
        });

      var authorsPromise = bookService.getUniqueAuthors()
        .then(function (uniqueAuthors) {
          vm.authors = uniqueAuthors;
        });

      $q.all([categoriesPromise, authorsPromise]).then(function () {
        vm.isSuccess = true;
      })

    }]);

})();