(function () {

  'use strict';

  angular.module('edition')
    .controller('EditionCtrl', ['$routeParams','navigationService', 'bookService',
      function ($routeParams, navigationService, bookService) {

        var vm = this;

        vm.submitBook = submitBook;

        if ($routeParams.id) {
          bookService.getBook($routeParams.id).success(function (book) {
            vm.book = book;
          })
        }

        function submitBook (book) {

          var method = book.id ? bookService.updateBook : bookService.addBook;

          method(book).success(function () {
            navigationService.setActive('home');
          })
        }
      }]);

})();