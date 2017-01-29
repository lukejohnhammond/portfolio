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
      $scope.error = null;
      $scope.active = false;

      $scope.$watchGroup(['base64', 'src'], () => {
        $scope.image = $scope.base64 || $scope.src;
      });

      reader.onload = () => {
        $scope.base64 = reader.result;
        $scope.$apply();
      };

      element
        .on('dragover', () => {
          $scope.error = null;
          $scope.active = true;
          $scope.$apply();
        })
        .on('dragover', (e) => {
          e.preventDefault();
        })
        .on('dragleave', () => {
          $scope.active = false;
          $scope.$apply();
        })
        .on('drop', (e) => {
          e.preventDefault();
          console.log('dropped');

          const files = (e.target.files || e.dataTransfer.files)[0];

          if(files.size > 40000) {
            $scope.error = 'File is too large';
            $scope.$apply();
            return;
          }

          reader.readAsDataURL(files);
        });
    }
  };
}
