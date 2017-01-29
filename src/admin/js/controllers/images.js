angular.module('admin')
  .controller('ImageUploaderController', ImageUploaderController);

ImageUploaderController.$inject = ['Image'];
function ImageUploaderController(Image) {
  const Upload = this;

  Upload.image = {};

  function addImage() {
    console.log(Upload.data);
    Image.save(Upload, () => {
      Upload.image = {};
    });
  }

  Upload.addImage = addImage;
}
