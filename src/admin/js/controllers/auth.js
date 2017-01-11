angular.module('admin')
.controller('LoginController', LoginController);

LoginController.$inject = ['$auth', '$state'];
function LoginController($auth, $state) {
  const login = this;

  login.credentials = {};

  function submit() {
    login.isLoggedIn = true;
    $auth.loginUrl = '/api/auth/login';

    $auth.login(login.credentials)
      .then(() => {
        login.currentUser = $auth.getPayload();
        $state.go('adminHome');
      });
  }

  function authenticate(service) {
    $auth.authenticate(service)
    .then(() => {
      $state.go('adminHome');
    });
  }

  login.submit = submit;
  login.authenticate = authenticate;
}
