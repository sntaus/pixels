angular.module("pixels").config(["$provide", function ($provide) {
    $provide.constant("baseUrl", "http://localhost:3000/");

    //API Endpoints
    $provide.constant("galleryEndpoint", "photo/all");
    $provide.constant("photoDetailsEndpoint", "photo/one");
    $provide.constant("loginEndpoint", "user/login");


}]);