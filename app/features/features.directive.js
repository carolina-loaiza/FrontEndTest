'use strict';

;(function() {

    angular
    .module('template')
    .directive('features', features)

    function features() {
      return {
        templateUrl: 'features/features.html',
        controllerAs: 'features',
        controller: FeaturesController
      }

      function FeaturesController(dataService) {
        var vm = this;
        vm.data = dataService.features();
      }

      FeaturesController.$inject = ['dataService'];
    };

})();
