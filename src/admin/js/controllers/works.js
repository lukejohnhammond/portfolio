angular.module('admin')
  .controller('WorksIndexController', WorksIndexController)
  .controller('WorkCreateController', WorkCreateController)
  .controller('WorkShowController', WorkShowController);

WorksIndexController.$inject = ['$resource', 'Work'];
function WorksIndexController($resource, Work) {
  const worksIndex = this;

  Work.query(data => {
    worksIndex.works = data;
  });
}

WorkCreateController.$inject = ['$resource', '$state', '$auth', 'Work'];
function WorkCreateController($resource, $state, $auth, Work) {
  const workCreate = this;

  workCreate.authUser = $auth.getPayload();
  if(workCreate.authUser) {
    workCreate.authUser = workCreate.authUser._id;
  }

  workCreate.work = {
    author: workCreate.authUser
  };

  function addArticle() {
    console.log(workCreate.work);
    Work.save(workCreate, (data) => {
      $state.go('workShow', {id: data._id});
    });
  }

  workCreate.addArticle = addArticle;
}

WorkShowController.$inject = ['$resource', 'Work', '$state'];
function WorkShowController($resource, Work, $state) {
  const workShow = this;

  Work.get($state.params, data => {
    workShow.data = data;
  });
}
