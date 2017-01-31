app.controller('PhotoController', ['$scope', 'photos', '$routeParams', function($scope, photos, $routeParams) {
  // photo service
  photos.success(function(data) {
    $scope.detail = data[$routeParams.id];
  });
}]);
