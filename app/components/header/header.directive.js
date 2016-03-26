'use strict';

;(function() {

    angular
    .module('template')
    .directive('mainHeader', mainHeader)

    function mainHeader() {
      return {
        templateUrl: 'components/header/header.html',
        controllerAs: 'header',
        controller: HeaderController
      }

      function HeaderController(dataService) {
        var vm = this;
        vm.data = dataService.header();
      }

      HeaderController.$inject = ['dataService'];
    };

})();
