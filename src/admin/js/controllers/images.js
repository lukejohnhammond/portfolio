angular.module('admin')
  .controller('ImageUploaderController', ImageUploaderController);

ImageUploaderController.$inject = [];
function ImageUploaderController() {
  const upload = this;

  upload.data = {};
}
