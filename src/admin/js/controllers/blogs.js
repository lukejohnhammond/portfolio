angular.module('admin')
  .controller('BlogsIndexController', BlogsIndexController)
  .controller('BlogCreateController', BlogCreateController)
  .controller('BlogShowController', BlogShowController);

BlogsIndexController.$inject = ['$resource', 'Blog'];
function BlogsIndexController($resource, Blog) {
  const blogsIndex = this;

  Blog.query(data => {
    blogsIndex.blogs = data;
  });
}

BlogCreateController.$inject = ['$resource', '$state', '$auth', 'Blog'];
function BlogCreateController($resource, $state, $auth, Blog) {
  const blogCreate = this;

  blogCreate.authUser = $auth.getPayload();
  if(blogCreate.authUser) {
    blogCreate.authUser = blogCreate.authUser._id;
  }

  blogCreate.blog = {
    author: blogCreate.authUser
  };

  function addArticle() {
    console.log(blogCreate.blog);
    Blog.save(blogCreate, (data) => {
      $state.go('blogShow', {id: data._id});
    });
  }

  blogCreate.addArticle = addArticle;
}

BlogShowController.$inject = ['$resource', 'Blog', '$state'];
function BlogShowController($resource, Blog, $state) {
  const blogShow = this;

  Blog.get($state.params, data => {
    blogShow.data = data;
  });
}
