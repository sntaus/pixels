angular.module("pixels").factory("API", ["$http", "baseUrl", "galleryEndpoint", "photoDetailsEndpoint", "loginEndpoint", function ($http, baseUrl, galleryEndpoint, photoDetailsEndpoint, loginEndpoint) {
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
        },

        login: function(username, password, success, failure) {
            $http({
                method: "POST",
                url: baseUrl + loginEndpoint,
                data: {
                    'username': username,
                    'password': password
                }
            }).then(success, failure);
        }
    }
}]);