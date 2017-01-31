app.controller('MainController', ['$scope', 'forecast', function($scope, forecast) {
  // forecast service
  forecast.success(function(data) {
    $scope.fiveDay = data;
  });

}]);
