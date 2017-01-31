app.directive('installApp', function() {
  return {
    restrict: 'E', // restrict specifies how the directive will be used in the view. The 'E' means it will be used as a new HTML element.
    scope: {
    },
    templateUrl: 'js/directives/installApp.html',
    link: function(scope, element, attrs) {
      scope.buttonText = "Install",
      scope.installed = false,

      scope.download = function() {
        element.toggleClass('btn-active');
        if(scope.installed) {
          scope.buttonText = "Install";
          scope.installed = false;
        } else {
          scope.buttonText = "Uninstall";
          scope.installed = true;
        }
      }
    }
  };
});
