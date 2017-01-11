angular.module('portfolio')
  .factory('Work', Work);

Work.$inject = ['$resource'];
function Work($resource) {
  return new $resource('/api/works/:id', { id: '@_id' }, {
    update: { method: 'PUT' }
  });
}
