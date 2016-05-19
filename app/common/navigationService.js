(function () {
  'use strict';

  angular.module('common')
    .factory('navigationService', [function () {

      var nav = 'home';
      var bookNavId;

      return {
        isActive: isActive,
        setActive: setActive,
        getBookNavId: getBookNavId
      };

      function isActive (menuItem) {
        return nav === menuItem;
      }

      function setActive (menu, id) {
        nav = menu;
        bookNavId = id;
      }

      function getBookNavId () {
        return bookNavId;
      }
    }]);
})();