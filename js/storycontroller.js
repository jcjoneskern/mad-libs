var app = angular.module("madModule");

app.controller("storyController", function($scope, formEntryStore) {
  var completeLibs = function() {
    $scope.completedLibs = formEntryStore.getFormEntries();
  };
  $scope.$on('$routeChangeSuccess', function () {
    completeLibs();
  });
});
