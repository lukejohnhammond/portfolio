angular.module('admin', ['ngResource', 'ui.router', 'satellizer'])
  .config(Router);


Router.$inject = ['$stateProvider', '$urlRouterProvider'];
function Router($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      views: {
        'admin': {
          templateUrl: '/admin/templates/login.html',
          controller: 'LoginController',
          controllerAs: 'login'
        }
      }
    })
    .state('adminHome', {
      url: '/home',
      views: {
        'admin': {
          templateUrl: '/admin/templates/adminHome.html',
          controller: 'AdminHomeController',
          controllerAs: 'adminHome'
        }
      }
    })

    // Blogs
    .state('blogsIndex', {
      url: '/blogs',
      views: {
        'admin': {
          templateUrl: '/admin/templates/blogsIndex.html',
          controller: 'BlogsIndexController',
          controllerAs: 'blogsIndex'
        }
      }
    })
    .state('blogCreate', {
      url: '/blogs/new',
      views: {
        'admin': {
          templateUrl: '/admin/templates/blogCreate.html',
          controller: 'BlogCreateController',
          controllerAs: 'blogCreate'
        }
      }
    })
    .state('blogShow', {
      url: '/blogs/:id',
      views: {
        'admin': {
          templateUrl: '/admin/templates/blogShow.html',
          controller: 'BlogShowController',
          controllerAs: 'blogShow'
        }
      }
    })

    // Works
    .state('worksIndex', {
      url: '/works',
      views: {
        'admin': {
          templateUrl: '/admin/templates/worksIndex.html',
          controller: 'WorksIndexController',
          controllerAs: 'worksIndex'
        }
      }
    })
    .state('workCreate', {
      url: '/works/new',
      views: {
        'admin': {
          templateUrl: '/admin/templates/workCreate.html',
          controller: 'WorkCreateController',
          controllerAs: 'workCreate'
        }
      }
    })
    .state('workShow', {
      url: '/works/:id',
      views: {
        'admin': {
          templateUrl: '/admin/templates/workShow.html',
          controller: 'WorkShowController',
          controllerAs: 'workShow'
        }
      }
    });
  $urlRouterProvider.otherwise('/');
}
