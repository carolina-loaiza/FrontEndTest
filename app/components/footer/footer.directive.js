'use strict';

;(function() {

    angular
    .module('template')
    .directive('mainFooter', mainFooter)

    function mainFooter() {
      return {
        templateUrl: 'components/footer/footer.html',
        controllerAs: 'footer',
        controller: FooterController
      }

      function FooterController(dataService) {
        var vm = this;
        vm.nav =  dataService.footer();
      }
      
      FooterController.$inject = ['dataService'];
    };

})();
