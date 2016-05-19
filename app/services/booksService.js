(function () {
  'use strict';
  angular.module('bibliotheque')
    .factory('bookService', ['$http','BACKEND', function ($http, BACKEND) {
      return {
        getBooks: getBooks,
        getBook: getBook,
        deleteBook: deleteBook,
        addBook: addBook,
        updateBook: updateBook
      };

      function getBooks () {
        return $http.get(BACKEND + '/books');
      }

      function getBook (id) {
        return $http.get(BACKEND + '/books/' + id);
      }

      function deleteBook (id) {
        return $http.delete(BACKEND + '/books/' + id);
      }

      function updateBook (book) {
        return $http.put(BACKEND + '/books/' + book.id, book);
      }

      function addBook (book) {
        return $http.post(BACKEND + '/books', book);
      }

    }]);
})();
