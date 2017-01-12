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
    })
    .state('workShow', {
      url: '/works/:id',
      views: {
        'works': {
          templateUrl: '/templates/workShow.html',
          controller: 'WorkShowController',
          controllerAs: 'workShow'
        }
      }
    });
  $urlRouterProvider.otherwise('/');
}
