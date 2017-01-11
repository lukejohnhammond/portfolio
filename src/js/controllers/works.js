angular.module('portfolio')
  .controller('WorksIndexController', WorksIndexController);

WorksIndexController.$inject = ['$resource', 'Work'];
function WorksIndexController($resource, Work) {
  const worksIndex = this;

  Work.query(data => {
    worksIndex.works = data;
  });
}
