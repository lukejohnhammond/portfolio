angular.module('portfolio', ['ngResource', 'ui.router'])
  .config(Router);


Router.$inject = ['$stateProvider', '$urlRouterProvider'];
function Router($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/'
    })
    .state('about', {
      url: '/about'
    })
    .state('blogsIndex', {
      url: '/blogs',
      views: {
        'blogs': {
          templateUrl: '/templates/blogsIndex.html',
          controller: 'BlogsIndexController',
          controllerAs: 'blogsIndex'
        }
      }
    })
    .state('worksIndex', {
      url: '/works',
      views: {
        'works': {
          templateUrl: '/templates/worksIndex.html',
          controller: 'WorksIndexController',
          controllerAs: 'worksIndex'
        }
      }
    });
  $urlRouterProvider.otherwise('/');
}
