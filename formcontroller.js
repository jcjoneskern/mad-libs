var app = angular.module("madModule");

app.controller("formController", function($scope, $location, formEntryStore) {
  $scope.receiveInputs = function(formEntries) {
    formEntryStore.setFormEntries($scope.formEntries);
    $location.path("/story");
  };
});
