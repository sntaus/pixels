angular.module("pixels").config(["$provide", function ($provide) {
    $provide.constant("baseUrl", "http://localhost:3000/")
}]);