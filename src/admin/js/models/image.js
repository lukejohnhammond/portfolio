angular.module('admin')
  .factory('Image', Image);

Image.$inject = ['$resource'];
function Image($resource) {
  return new $resource('/api/images/:id', { id: '@_id' }, {
    update: { method: 'PUT' }
  });
}
