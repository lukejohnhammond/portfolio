angular.module('admin')
  .controller('AdminHomeController', AdminHomeController);

function AdminHomeController() {
  const adminHome = this;
  adminHome.title = 'This is the admin panel';

}
