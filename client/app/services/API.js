angular.module("pixels").factory("API", ["$http", "baseUrl", "galleryEndpoint", "photoDetailsEndpoint", "loginEndpoint", "likeEndpoint", function ($http, baseUrl, galleryEndpoint, photoDetailsEndpoint, loginEndpoint, likeEndpoint) {
    return {
        getGallery: function (success, failure) {
            $http({
                method: "GET",
                url: baseUrl + galleryEndpoint
            }).then(success, failure);
        },

        getDetails: function (photoId, accessToken, success, failure) {
            if (accessToken.access_token == null)
                $http({
                    method: "GET",
                    url: baseUrl + photoDetailsEndpoint.replace(":id", photoId)
                }).then(success, failure);
            else {
                $http({
                    method: "POST",
                    url: baseUrl + photoDetailsEndpoint.replace(":id", photoId),
                    data: {
                        'id': photoId,
                        'access_token': accessToken.access_token,
                        'token_secret': accessToken.token_secret
                    }
                }).then(success, failure);
            }
        },

        likePhoto: function(photoId, accessToken, success, failure) {
            $http({
                method: "POST",
                url: baseUrl + likeEndpoint.replace(":id", photoId),
                data: {
                    'access_token': accessToken.access_token,
                    'token_secret': accessToken.token_secret
                }
            }).then(success, failure);
        },

        login: function (username, password, success, failure) {
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