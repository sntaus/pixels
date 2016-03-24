'use strict';

angular.module('pixels.gallery', ['jtt_angular_xgallerify', 'ngRoute', 'ngAnimate'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/gallery', {
            templateUrl: 'gallery/gallery.html',
            controller: 'GalleryCtrl'
        });
    }])

    .controller('GalleryCtrl', ['$scope', '$timeout', '$location', 'API', '$rootScope', function ($scope, $timeout, $location, API, $rootScope) {
        $scope.images = $rootScope.images; // Array of images, to be populated using a service



        // Sample data
        /*$scope.images = [
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
        ];*/




        $scope.successGallery = function(data) {
            $rootScope.images = data.data;
            $scope.images = $rootScope.images;
        }


        $scope.failureGallery = function(data) {
            console.log(data);
            alert("failure");
        }

        $scope.refreshGallery = function() {
            // Using timeout to run it after digest cycle in AngularJS
            $timeout(function() {
                $scope.$broadcast("angular-xGallerify.refresh");
            });
        }


        API.getGallery($scope.successGallery, $scope.failureGallery);



    }]);