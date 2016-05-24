(function () {
  'use strict';
  angular.module('common').directive('appMenu', function () {
    return {
      templateUrl: 'app/common/directives/appMenu.html',
      controller: AppMenuCtrl,
      controllerAs : 'ctrl'
    };
  });

  AppMenuCtrl.$inject = ['navigationService'];

  function AppMenuCtrl (navigationService) {
    var vm = this;

    vm.isActive = navigationService.isActive;
    vm.setActive = navigationService.setActive;

  }
})();