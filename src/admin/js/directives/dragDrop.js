angular.module('admin')
  .directive('dragdrop', dragdrop);

function dragdrop() {
  const reader = new FileReader();
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'templates/dragDrop.html',
    link($scope, element) {

      reader.onload = () => {
        console.log(reader.result);
      };

      element
        .on('dragover', (e) => {
          e.preventDefault();
          console.log('AGR');
        })
        .on('drop', (e) => {
          e.preventDefault();
          console.log('dropped');

          const files = (e.target.files || e.dataTransfer.files)[0];
          console.log(files);

          reader.readAsDataURL(files);
        });
    }
  };
}
