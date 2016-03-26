'use strict';

;(function() {

    angular
    .module('template')
    .directive('notify', notify)

    function notify() {
      return {
        templateUrl: 'notify/notify.html',
        controllerAs: 'notify',
        controller: NotifyController
      }

      function NotifyController($sce, dataService) {
        var vm = this;
        vm.data = dataService.notify();
        vm.video = $sce.trustAsResourceUrl(vm.data.video);
      }

      NotifyController.$inject = ['$sce', 'dataService'];
    };

})();
