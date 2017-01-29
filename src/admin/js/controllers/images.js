angular.module('admin')
  .controller('ImageUploaderController', ImageUploaderController);

ImageUploaderController.$inject = ['Image'];
function ImageUploaderController(Image) {
  const Upload = this;

  Upload.image = {};

  function addImage() {
    console.log(Upload.data);
    Image.save(Upload, (data) => {
      // $state.go('images', {id: data._id});
      console.log(data, 'saved');
    });
  }

  Upload.addImage = addImage;
}
