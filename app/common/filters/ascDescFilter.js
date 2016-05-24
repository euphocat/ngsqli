(function () {
  'use strict';
  angular.module('common').filter('ascDesc', function () {
    return function (isAsc) {
      return isAsc ? '\u25B2' : '\u25BC';
    }
  })
})();