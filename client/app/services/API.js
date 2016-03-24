angular.module("pixels").factory("API", ["$http", function ($http) {
    return {
        getGallery: function(images) {
            $http({method: "POST"});
        }
    }
}]);