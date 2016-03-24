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
        $scope.photo = {}; // Selected image for photo viewer - empty initially
        $scope.photoViewer = false; // Whether or not photoviewer is currently on - initially false


        // Code for gallery
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





        // Code for photo viewer
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



        $scope.loadingGallery = true;
        API.getGallery($scope.successGallery, $scope.failureGallery);


    }]);

