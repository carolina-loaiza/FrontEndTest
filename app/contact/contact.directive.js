'use strict';

;(function() {

    angular
    .module('template')
    .directive('mainContact', mainContact)

    function mainContact() {
      return {
        templateUrl: 'contact/contact.html',
        controllerAs: 'contact',
        controller: ContactController
      }

      function ContactController(dataService) {
        var vm = this;
        vm.data = dataService.contact();
      }

      ContactController.$inject = ['dataService'];
    };

})();
