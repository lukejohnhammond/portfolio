angular.module('portfolio')
  .controller('WorksIndexController', WorksIndexController)
  .controller('WorkShowController', WorkShowController);

WorksIndexController.$inject = ['$resource', 'Work'];
function WorksIndexController($resource, Work) {
  const worksIndex = this;

  Work.query(data => {
    worksIndex.works = data;
  });
}

WorkShowController.$inject = ['$resource', 'Work', '$state'];
function WorkShowController($resource, Work, $state) {
  const workShow = this;

  Work.get($state.params, data => {
    workShow.data = data;
    console.log(data);
  });
}
