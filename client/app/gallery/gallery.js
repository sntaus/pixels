'use strict';

angular.module('pixels.gallery', ['jtt_angular_xgallerify', 'ngRoute', 'ngAnimate'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/gallery', {
            templateUrl: 'gallery/gallery.html',
            controller: 'GalleryCtrl'
        });
    }])

    .controller('GalleryCtrl', ['$scope', '$timeout', '$location', 'API', '$rootScope', function ($scope, $timeout, $location, API, $rootScope) {
        $scope.images = []; // Array of images, to be populated using a service

        $scope.refreshGallery = function () {
            // Using timeout to run it after digest cycle in AngularJS
            $timeout(function () {
                $scope.$broadcast("angular-xGallerify.refresh");
            });
        }

        $scope.successGallery = function (data) {
            $scope.images = data.data;
            $scope.loading = false;
        }


        $scope.failureGallery = function (data) {
            $scope.loading = false;
        }

        // Sample data
        $scope.photo = {};


        // Code for photo viewer
        $scope.photoViewer = false;

        $scope.successLoad = function (data) {
            $scope.photo = data.data;
        };

        $scope.failureLoad = function (data) {
        };

        $scope.openPhoto = function (id) {
            $scope.photoViewer = true;
            API.getDetails(id, $scope.successLoad, $scope.failureLoad);
        }

        $scope.closePhoto = function () {
            $scope.photo = {};
            $scope.photoViewer = false;
        }


        $scope.loading = true;
        API.getGallery($scope.successGallery, $scope.failureGallery);


    }]);

