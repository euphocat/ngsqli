(function () {
  'use strict';
  angular.module('common').filter('formatFieldTitle', function () {
    return function (field) {

      return field.toLowerCase()
        .replace('.', ' ')
        .firstLetterToUpper();

    }
  })
})();