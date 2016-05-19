(function () {

  'use strict';

  angular.module('bibliotheque', ['ui.bootstrap', 'ngMessages'])
    .controller('EditionCtrl', function () {
      var vm = this;

      vm.getClassesActive = getClassesActive;

      vm.submitBook = submitBook;

      function submitBook () {
        console.log(vm.book);
      }

      function getClassesActive (name) {
        return {
          'has-success' : vm.bookEdition[name].$dirty && vm.bookEdition[name].$valid,
          'has-error': vm.bookEdition[name].$dirty && vm.bookEdition[name].$invalid}
        }
    });

})();