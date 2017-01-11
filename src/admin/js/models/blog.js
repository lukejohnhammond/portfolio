angular.module('admin')
  .factory('Blog', Blog);

Blog.$inject = ['$resource'];
function Blog($resource) {
  return new $resource('/api/blogs/:id', { id: '@_id' }, {
    update: { method: 'PUT' }
  });
}
