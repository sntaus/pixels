angular.module("pixels").factory("API", ["$http", "baseUrl", "galleryEndpoint", "photoDetailsEndpoint", function ($http, baseUrl, galleryEndpoint, photoDetailsEndpoint) {
    return {
        getGallery: function (success, failure) {
            $http({
                method: "GET",
                url: baseUrl + galleryEndpoint
            }).then(success, failure);
        },

        getDetails: function (photoId, success, failure) {
            $http({
                method: "GET",
                url: baseUrl + photoDetailsEndpoint + "?id=" + photoId
            }).then(success, failure);
        }
    }
}]);