angular.module('admin')
  .directive('dragdrop', dragdrop);

function dragdrop() {
  const reader = new FileReader();
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'templates/dragDrop.html',
    scope: {
      base64: '='
    },
    link($scope, element) {

      $scope.base64 = null;
      $scope.active = false;

      reader.onload = () => {
        $scope.base64 = reader.result;
        console.log(reader.result);
        $scope.$apply();
      };

      element
        .on('dragover', () => {
          $scope.active = true;
          $scope.$apply();
        })
        .on('dragover', (e) => {
          e.preventDefault();
          console.log('AGR');
        })
        .on('dragleave', () => {
          $scope.active = false;
          $scope.$apply();
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
