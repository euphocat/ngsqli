(function () {

  'use strict';

  angular.module('bibliotheque')
    .controller('EditionCtrl', ['navigationService', 'bookService',
      function (navigationService, bookService) {

        var vm = this;

        vm.submitBook = submitBook;

        var bookNavId = navigationService.getBookNavId();

        if (bookNavId) {
          bookService.getBook(bookNavId).success(function (book) {
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