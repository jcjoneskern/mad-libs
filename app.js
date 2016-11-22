var app = angular.module("madModule", ["ngRoute"]);
app.config(function($routeProvider) {
  $routeProvider.when("/form", {
    templateUrl: "form.html"
  });
  $routeProvider.when("/story", {
    templateUrl: "story.html"
  });
  $routeProvider.when("/", {
    templateUrl: "form.html"
  });
  $routeProvider.otherwise({
    template: "how did you even get here"
  });
});
