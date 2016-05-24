(function () {
  'use strict';
  angular.module('common', []).run(function () {
    String.prototype.firstLetterToUpper = function() {
      return this.charAt(0).toUpperCase() + this.slice(1);
    };
  })
})();