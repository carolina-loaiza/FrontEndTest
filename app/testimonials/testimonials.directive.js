'use strict';

;(function() {

    angular
    .module('template')
    .directive('testimonials', testimonials)

    function testimonials() {
      return {
        templateUrl: 'testimonials/testimonials.html',
        controllerAs: 'testimonials',
        controller: TestimonialsController
      }

      function TestimonialsController(dataService) {
        var vm = this;
        var data = dataService.testimonials();
        vm.avatars = data;

        vm.avatarHover = function(index) {
          vm.isHover = index;
          vm.name = data[index].name;
          vm.content = data[index].review;
        };

        vm.avatarHover(5);
      }

      TestimonialsController.$inject = ['dataService'];
    };

})();
