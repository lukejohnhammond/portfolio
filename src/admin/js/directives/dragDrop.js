angular.module('admin')
  .directive('dragdrop', dragdrop);

function dragdrop() {
  const reader = new FileReader();
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'templates/dragDrop.html',
    link($scope, element) {

      $scope.base64String = null;

      reader.onload = () => {
        $scope.base64String = reader.result;
        $scope.$apply();
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

          reader.readAsDataURL(files);
        });
    }
  };
}
