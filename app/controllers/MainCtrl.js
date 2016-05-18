(function () {

  'use strict';

  angular.module('bibliotheque')
    .controller('MainCtrl', function () {

      var vm = this;

      var nav = 'home';
      vm.isActive = isActive;
      vm.setActive = setActive;

      function isActive (menuItem) {
        return nav === menuItem;
      }

      function setActive (menu) {
        return nav = menu;
      }
    });

})();