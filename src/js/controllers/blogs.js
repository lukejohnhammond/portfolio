angular.module('portfolio')
  .controller('BlogsIndexController', BlogsIndexController);

BlogsIndexController.$inject = ['$resource', 'Blog'];
function BlogsIndexController($resource, Blog) {
  const blogsIndex = this;

  Blog.query(data => {
    blogsIndex.blogs = data;
  });
}

// ChallengesNewController.$inject = ['Challenge', '$state', '$auth'];
// function ChallengesNewController(Challenge, $state, $auth) {
//   const challengesNew = this;
//   const payload = $auth.getPayload();
//
//   challengesNew.challenge = {};
//   challengesNew.challenge.projectCreator = [payload._id];
//
//   function create() {
//     Challenge.save(challengesNew.challenge, () => {
//       $state.go('challengesIndex');
//     });
//   }
//
//
//
//   challengesNew.create = create;
// }
