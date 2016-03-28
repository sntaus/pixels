angular.module("pixels").config(["$provide", function ($provide) {
    $provide.constant("baseUrl", "http://localhost:3000/");

    //API Endpoints
    $provide.constant("galleryEndpoint", "photos");
    $provide.constant("photoDetailsEndpoint", "photos/:id");
    $provide.constant("loginEndpoint", "user/login");
    $provide.constant("likeEndpoint", "photos/:id/like");


}]);