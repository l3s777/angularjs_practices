app.directive('appInfo', function() {
  return {
    restrict: 'E', // restrict specifies how the directive will be used in the view. The 'E' means it will be used as a new HTML element.
    scope: {
      info: '=' // The = tells the directive to look for an attribute named info in the <app-info> element
    },
    templateUrl: 'js/directives/appInfo.html'
  };
});
