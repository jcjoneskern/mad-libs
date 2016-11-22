var app = angular.module("madModule", ["ngRoute"]);
app.config(function($routeProvider) {
  $routeProvider.when("/form", {
    controller: "formController",
    templateUrl: "form.html"
  });
  $routeProvider.when("/story", {
    controller: "storyController",
    templateUrl: "story.html"
  });
  $routeProvider.when("/", {
    controller: "formController",
    templateUrl: "form.html"
  });
  $routeProvider.otherwise({
    template: "how did you even get here"
  });
});
