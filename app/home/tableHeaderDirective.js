(function () {
  'use strict';
  angular.module('home').directive('tableHeader', function () {
    return {
      restrict: 'A',
      scope: {},
      bindToController: {
        field: '@'
      },
      templateUrl: 'app/home/tableHeader.html',
      controller: TableHeaderCtrl,
      controllerAs : 'ctrl'
    };
  });

  TableHeaderCtrl.$inject = ['tableHeaderService'];

  function TableHeaderCtrl (tableHeaderService) {
    var vm = this;

    vm.isFieldOrderActive = isFieldOrderActive;
    vm.changeOrder = changeOrder;
    vm.getIsReverse = tableHeaderService.getIsReverse;

    function isFieldOrderActive() {
      return tableHeaderService.isFieldOrderActive(vm.field);
    }

    function changeOrder () {
      return tableHeaderService.changeOrder(vm.field);
    }
  }
})();