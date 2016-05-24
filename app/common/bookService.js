(function () {
  'use strict';
  angular.module('common')
    .factory('bookService', ['$http', '$timeout', '$filter', 'BACKEND', function ($http, $timeout, $filter, BACKEND) {
      return {
        getBooks: getBooks,
        getBook: getBook,
        deleteBook: deleteBook,
        addBook: addBook,
        updateBook: updateBook,
        getUniqueAuthors: getUniqueAuthors,
        getUniqueCategories: getUniqueCategories
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

      function getUniqueAuthors () {

        return getBooks().then(function (books) {
          return $timeout(function () {
            return books;
          }, 2000)
            .then(getAuthors);
        });

        function getAuthors (books) {
          return books.data
            .map(function (book) {
              return book.author.firstName + ' ' + book.author.lastName;
            })
            .filter(function (value, index, self) {
              return self.indexOf(value) === index;
            });
        }
      }

      function getUniqueCategories () {

        return getBooks()
          .then(function (books) {
            return $timeout(function () {
              return books;
            }, 1000)
          })
          .then(getCategories);

        function getCategories (books) {

          return books.data
            .reduce(function (prev, next) {
              var categories = $filter('category')(next.category);
              return prev.concat(categories);
            }, [])
            .filter(function (value, index, self) {
              return self.indexOf(value) === index;
            })
            .sort();

        }
      }

    }]);
})();
