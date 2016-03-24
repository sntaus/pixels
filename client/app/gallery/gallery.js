'use strict';

angular.module('pixels.gallery', ['jtt_angular_xgallerify', 'ngRoute', 'ngAnimate'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/gallery', {
            templateUrl: 'gallery/gallery.html',
            controller: 'GalleryCtrl'
        });
    }])

    .controller('GalleryCtrl', ['$scope', '$timeout', '$location', function ($scope, $timeout, $location) {
        $scope.images = [];



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

        $scope.refreshGallery = function() {
            $timeout(function() {
                $scope.$broadcast("angular-xGallerify.refresh");
            });
        }






    }]);