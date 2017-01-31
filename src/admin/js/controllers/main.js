angular.module('admin')
  .controller('MainController', MainController);

MainController.$inject = ['$auth', '$rootScope', '$state'];
function MainController($auth, $rootScope, $state) {
  const main = this;

  main.isLoggedIn = $auth.isAuthenticated;
  main.currentUser = $auth.getPayload();

  const protectedStates = ['adminHome', 'imageUpload', 'blogsIndex', 'blogCreate', 'blogShow', 'worksIndex', 'workCreate', 'workShow'];

  function secureState(e, toState) {
    main.message = null;
    if(!$auth.isAuthenticated() && protectedStates.includes(toState.name)) {
      e.preventDefault();
      $state.go('home');
      main.message = 'You must be logged in to go there!';
    }
  }

  $rootScope.$on('$stateChangeStart', secureState);

}
