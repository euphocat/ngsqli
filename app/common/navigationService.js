(function () {
  'use strict';

  angular.module('common')
    .factory('navigationService', ['$location', function ($location) {

      var nav = 'home';
      var bookNavId;

      return {
        isActive: isActive,
        setActive: setActive,
        getBookNavId: getBookNavId
      };

      function isActive (menuItem) {

        var locationPath = $location.path();
        var path = locationPath === '/' ? '/home' : locationPath;

        var currentRoute = path
          .substring(1)
          .split('/')[0];

        return currentRoute === menuItem;

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