(function () {
  'use strict';
  angular.module('home').factory('tableHeaderService', function () {

    var isReverse = false;
    var fieldOrder;

    return {
      changeOrder: changeOrder,
      isFieldOrderActive: isFieldOrderActive,
      getFieldOrder: getFieldOrder,
      getIsReverse: getIsReverse
    };

    function changeOrder (field) {

      var isFieldActive = field === fieldOrder;

      isReverse = isFieldActive ? !isReverse : false;
      fieldOrder = field;

    }

    function isFieldOrderActive (field) {
      return field === fieldOrder;
    }

    function getFieldOrder () {
      return fieldOrder;
    }

    function getIsReverse () {
      return isReverse;
    }
  });
})();