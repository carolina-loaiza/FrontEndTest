'use strict';

;(function() {

  angular
    .module('template', ['ngSanitize']);

})();
'use strict';

//Data service

;(function() {
  
  angular
    .module('template')
    .service('dataService', dataService);

    function dataService(){
      return {
        header: header,
        features: features,
        testimonials: testimonials,
        notify: notify,
        footer: footer,
        contact: contact
      };

      function header() {
        var data = {
          logo: {
            text: "Notify.",
            image: "assets/images/logo.png"
          },
          slogan: "A great new free psd theme to showcase your new application.",
          available: [
            {
              name: "apple",
              link: "#"
            },
            {
              name: "android",
              link: "#"
            },
            {
              name: "windows",
              link: "#"
            }
          ]
        }
        return data;
      }

      function footer() {
        var data = [                                  
          {
            name: "Contact",
            link: "#"
          },
          {
            name: "Download",
            link: "#"
          },
          {
            name: "Press",
            link: "#"
          },
          {
            name: "Email",
            link: "#"
          },
          {
            name: "Support",
            link: "#"
          },
          {
            name: "Privacy Policy",
            link: "#"
          }
        ]
        return data;
      }

      function features() {
        var data = [
          {
            icon: "cog",
            title: "Editable Theme",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse fringilla fringilla."
          },
          {
            icon: "star",
            title: "Flat Design",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse fringilla fringilla."
          },
          {
            icon: "globe",
            title: "Reach Your Audience",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse fringilla fringilla."
          }
        ]
        return data;
      }

      function notify() {
        var data = {
          title: "Get Notified Of Any Updates!",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse fringilla fringilla nisl congue congue. Maecenas nec condimentum libero, at elementum mauris. Phasellus eget nisi dapibus, ultricies nisl at, hendrerit risusuis ornare luctus id sollicitudin ante lobortis at.",
          video: "https://player.vimeo.com/video/90249176?title=0&byline=0&portrait=0"
        }
        return data;
      }

      function contact() {
        var data = {
          title: "Say Hi & Get in Touch",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit suspendisse.",
          socialMedia: [
            {
              name: "twitter",
              link: "#"
            },
            {
              name: "facebook",
              link: "#"
            },
            {
              name: "pinterest",
              link: "#"
            },
            {
              name: "google-plus",
              link: "#"
            },
            {
              name: "linkedin",
              link: "#"
            },
            {
              name: "youtube",
              link: "#"
            }
          ]
        }
        return data;
      }

      function testimonials() {
        var data = [
          {
            name: "Jane Hunt",
            review: "Lorem ipsum dolor sit amet, Beatae veritatis aliquam, cumque atque harum labore tempore fugit repellendus sit consequuntur, nihil doloremque, saepe ipsam placeat magni? Iusto voluptatem earum, quasi?",
            avatar: "assets/images/testimonials/person_01.jpg"
          },
          {
            name: "James Thomas",
            review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. cumque atque harum labore tempore fugit repellendus sit consequuntur, nihil doloremque, saepe ipsam placeat magni? Iusto voluptatem earum, quasi?",
            avatar: "assets/images/testimonials/person_02.jpg"
          },
          {
            name: "Fred Edwards",
            review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae veritatis aliquam, labore tempore fugit repellendus sit consequuntur, nihil doloremque, saepe ipsam placeat magni? Iusto voluptatem earum, quasi?",
            avatar: "assets/images/testimonials/person_03.jpg"
          },
          {
            name: "Shawn Robinson",
            review: "Lorem ipsum dolor, consectetur adipisicing elit. Beatae veritatis aliquam, cumque atque harum labore tempore fugit repellendus sit consequuntur, nihil doloremque, saepe ipsam placeat magni? Iusto voluptatem earum, quasi?",
            avatar: "assets/images/testimonials/person_04.jpg"
          },
          {
            name: "Bonnie Hall",
            review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.itatis aliquam, cumque atque harum labore tempore fugit repellendus sit consequuntur, nihil doloremque, saepe ipsam placeat magni? Iusto voluptatem earum, quasi?",
            avatar: "assets/images/testimonials/person_05.jpg"
          },
          {
            name: "Kimberly Brown",
            review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae veritatis aliquam, cumque atque harum labore tempore fugit repellendus sit consequuntur, nihil doloremque, saepe ipsam placeat magni? Iusto voluptatem earum, quasi?",
            avatar: "assets/images/testimonials/person_06.jpg"
          },
          {
            name: "Susan Millert",
            review: "Lorem ipsum dolor sit amet, consectetur  Beatae veritatis aliquam, cumque atque harum labore tempore fugit repellendus sit consequuntur, nihil doloremque, saepe ipsam placeat magni? Iusto voluptatem earum, quasi?",
            avatar: "assets/images/testimonials/person_07.jpg"
          },
          {
            name: "Jean Howard",
            review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. B veritatis aliquam, cumque atque harum labore tempore fugit repellendus sit consequuntur, nihil doloremque, saepe ipsam placeat magni? Iusto voluptatem earum, quasi?",
            avatar: "assets/images/testimonials/person_08.jpg"
          },
          {
            name: "Edward Morris",
            review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae veritatis aliquam, cumque atque harum labore tempore fugit repellendus sit consequuntur, nihil doloremque, saepe ipsam placeat magni? Iusto voluptatem earum, quasi?",
            avatar: "assets/images/testimonials/person_09.jpg"
          },
          {
            name: "Jack Ross",
            review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit veritatis aliquam, cumque atque harum labore tempore fugit repellendus sit consequuntur, nihil doloremque, saepe ipsam placeat magni? Iusto voluptatem earum, quasi?",
            avatar: "assets/images/testimonials/person_10.jpg"
          },
          {
            name: "Wayne Gonzales",
            review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae veritatis  atque harum labore tempore fugit repellendus sit consequuntur, nihil doloremque, saepe ipsam placeat magni? Iusto voluptatem earum, quasi?",
            avatar: "assets/images/testimonials/person_11.jpg"
          },
          {
            name: "Marie Evans",
            review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.  veritatis aliquam, cumque atque harum labore tempore fugit repellendus sit consequuntur, nihil doloremque, saepe ipsam placeat magni? Iusto voluptatem earum, quasi?",
            avatar: "assets/images/testimonials/person_12.jpg"
          },
          {
            name: "Pamela Parker",
            review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae veritatis aliquam, cumque atque harum labore tempore fugit repellendus sit consequuntur, nihil doloremque, saepe ipsam placeat magni? Iusto voluptatem earum, quasi?",
            avatar: "assets/images/testimonials/person_13.jpg"
          },
          {
            name: "Thomas Griffin",
            review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae veritatis , cumque atque harum labore tempore fugit repellendus sit consequuntur, nihil doloremque, saepe ipsam placeat magni? Iusto voluptatem earum, quasi?",
            avatar: "assets/images/testimonials/person_14.jpg"
          },
          {
            name: "Jeffrey  Turner",
            review: "Lorem ipsum dolor sit adipisicing elit. Beatae veritatis aliquam, cumque atque harum labore tempore fugit repellendus sit consequuntur, nihil doloremque, saepe ipsam placeat magni? Iusto voluptatem earum, quasi?",
            avatar: "assets/images/testimonials/person_15.jpg"
          },
          {
            name: "Russell  Rogers",
            review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. B aliquam, cumque atque harum labore tempore fugit repellendus sit consequuntur, nihil doloremque, saepe ipsam placeat magni? Iusto voluptatem earum, quasi?",
            avatar: "assets/images/testimonials/person_16.jpg"
          },
          {
            name: "Julia Hernandez",
            review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae veritatis aliquam, cumque atque harum labore tempore fugit repellendus sit consequuntur,  saepe ipsam placeat magni? Iusto voluptatem earum, quasi?",
            avatar: "assets/images/testimonials/person_17.jpg"
          },
          {
            name: "Gregory  Campbell",
            review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae veritatis aliquam, cumque atque harum labore tempore fugit repellendus sit consequuntur, nihil doloremque, saepe ipsam placeat magni? Iusto voluptatem earum, quasi?",
            avatar: "assets/images/testimonials/person_18.jpg"
          },
          {
            name: "Martin Jenkins",
            review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae veritatis aliquam, cumque atque harum labore tempore fugit repellendus  saepe ipsam placeat magni? Iusto voluptatem earum, quasi?",
            avatar: "assets/images/testimonials/person_19.jpg"
          },
          {
            name: "Stephen Smith",
            review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae veritatis aliquam, cumque atque harum labore tempore fugit repellendus sit consequuntur, nihil doloremque, saepe ipsam placeat magni? ",
            avatar: "assets/images/testimonials/person_20.jpg"
          },
          {
            name: "Katherine Simmons",
            review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae veritatis aliquam, cumque atque harum labore tempore fugit repellendus sit consequuntur, nihil doloremque, saepe Iusto voluptatem earum, quasi?",
            avatar: "assets/images/testimonials/person_21.jpg"
          }
        ]
        return data;
      }

      
    }
})();
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
