angular.module('portfolio')
  .controller('MainController', MainController);

MainController.$inject = ['$rootScope'];
function MainController($rootScope) {
  const main = this;

  function stateFinder(event, toState) {
    main.stateName = toState.name.substring(0,4);
  }

  $rootScope.$on('$stateChangeStart', stateFinder);
}
