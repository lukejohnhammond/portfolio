angular.module('portfolio', ['ngResource', 'ui.router'])
  .config(Router);


Router.$inject = ['$stateProvider', '$urlRouterProvider'];
function Router($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/'
    })
    .state('workIndex', {
      url: '/work'
    })
    .state('about', {
      url: '/about'
    })
    .state('blogsIndex', {
      url: '/blogs',
      views: {
        'blogs': {
          templateUrl: '/templates/blogsIndex.html',
          controller: 'BlogController',
          controllerAs: 'blogs'
        }
      }
    });
  $urlRouterProvider.otherwise('/');
}
