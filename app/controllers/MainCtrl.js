(function () {

  'use strict';

  angular.module('bibliotheque')
    .controller('MainCtrl', ['navigationService', function (navigationService) {

      var vm = this;

      vm.isActive = navigationService.isActive;
      vm.setActive = navigationService.setActive;

    }]);

})();