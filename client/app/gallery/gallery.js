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

        $scope.refreshGallery = function() {
            // Using timeout to run it after digest cycle in AngularJS
            $timeout(function() {
                $scope.$broadcast("angular-xGallerify.refresh");
            });
        }

        $scope.successGallery = function(data) {
            $rootScope.images = data.data;
            $scope.images = $rootScope.images;
            $scope.loading = false;
        }


        $scope.failureGallery = function(data) {
            $scope.loading = false;
        }


        if($scope.images.length < 1) {
            $scope.loading = true;

            API.getGallery($scope.successGallery, $scope.failureGallery);
        }






    }]);