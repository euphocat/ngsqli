(function () {

  'use strict';

  angular.module('home')
    .controller('HomeCtrl', ['bookService', 'navigationService', function (bookService, navigationService) {

      var vm = this;

      vm.deleteBook = deleteBook;
      vm.editBook = editBook;

      vm.changeOrder = changeOrder;
      vm.reverse = false;

      init();

      function init () {
        bookService.getBooks()
          .success(function (data) {
            vm.books = data;
          });
      }

      function deleteBook (id) {
        bookService.deleteBook(id)
          .success(init);
      }

      function editBook (id) {
        navigationService.setActive('update', id)
      }

      function changeOrder (field) {

        if(field === vm.fieldOrder) {
          vm.reverse = !vm.reverse;
        } else {
          vm.reverse = false;
        }

        vm.fieldOrder = field;

      }

    }]);

})();