'use strict';

angular.module('pixels.gallery', ['jtt_angular_xgallerify', 'ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/gallery', {
            templateUrl: 'gallery/gallery.html',
            controller: 'GalleryCtrl'
        });
    }])

    .controller('GalleryCtrl', ['$scope', '$timeout', function ($scope, $timeout) {
        $scope.images = [];

        // Whenever images change, update the gallery
        $scope.$watch("images", function (updated, old) {
            // Using $timeout to ensure that refresh happens after view is updated
            $timeout(function() {
                $scope.$broadcast("angular-xGallerify.refresh");
            });
        });


        // Sample data
        $scope.images = [
            {
                "id": "1234",
                url: "https://scontent-sea1-1.xx.fbcdn.net/hphotos-xaf1/t31.0-8/1974234_10203208776200749_673168005_o.jpg"
            },
            {
                "id": "124",
                url: "https://scontent-sea1-1.xx.fbcdn.net/hphotos-xaf1/t31.0-8/1974234_10203208776200749_673168005_o.jpg"
            },
            {
                "id": "1124",
                url: "https://scontent-sea1-1.xx.fbcdn.net/hphotos-xaf1/t31.0-8/1974234_10203208776200749_673168005_o.jpg"
            },
            {
                "id": "1234",
                url: "https://scontent-sea1-1.xx.fbcdn.net/hphotos-xaf1/t31.0-8/1974234_10203208776200749_673168005_o.jpg"
            },
            {
                "id": "124",
                url: "https://scontent-sea1-1.xx.fbcdn.net/hphotos-xaf1/t31.0-8/1974234_10203208776200749_673168005_o.jpg"
            },
            {
                "id": "1124",
                url: "https://scontent-sea1-1.xx.fbcdn.net/hphotos-xaf1/t31.0-8/1974234_10203208776200749_673168005_o.jpg"
            },
            {
                "id": "1234",
                url: "https://scontent-sea1-1.xx.fbcdn.net/hphotos-xaf1/t31.0-8/1974234_10203208776200749_673168005_o.jpg"
            },
            {
                "id": "124",
                url: "https://scontent-sea1-1.xx.fbcdn.net/hphotos-xaf1/t31.0-8/1974234_10203208776200749_673168005_o.jpg"
            },
            {
                "id": "1124",
                url: "https://scontent-sea1-1.xx.fbcdn.net/hphotos-xaf1/t31.0-8/1974234_10203208776200749_673168005_o.jpg"
            },
            {
                "id": "1234",
                url: "https://scontent-sea1-1.xx.fbcdn.net/hphotos-xaf1/t31.0-8/1974234_10203208776200749_673168005_o.jpg"
            },
            {
                "id": "124",
                url: "https://scontent-sea1-1.xx.fbcdn.net/hphotos-xaf1/t31.0-8/1974234_10203208776200749_673168005_o.jpg"
            },
            {
                "id": "1124",
                url: "https://scontent-sea1-1.xx.fbcdn.net/hphotos-xaf1/t31.0-8/1974234_10203208776200749_673168005_o.jpg"
            },
            {
                "id": "1234",
                url: "https://scontent-sea1-1.xx.fbcdn.net/hphotos-xaf1/t31.0-8/1974234_10203208776200749_673168005_o.jpg"
            },
            {
                "id": "124",
                url: "https://scontent-sea1-1.xx.fbcdn.net/hphotos-xaf1/t31.0-8/1974234_10203208776200749_673168005_o.jpg"
            },
            {
                "id": "1124",
                url: "https://scontent-sea1-1.xx.fbcdn.net/hphotos-xaf1/t31.0-8/1974234_10203208776200749_673168005_o.jpg"
            },
        ];
    }]);