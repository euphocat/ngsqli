(function () {
  'use strict';
  angular.module('common').filter('category', function () {
    return function (category) {
      if (typeof category !== 'string') {
        return category;
      }

      return category.split(',');

    }
  })
})();