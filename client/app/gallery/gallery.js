'use strict';

angular.module('pixels.gallery', ['jtt_angular_xgallerify', 'ngRoute', 'ngAnimate'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/gallery', {
            templateUrl: 'gallery/gallery.html',
            controller: 'GalleryCtrl'
        });
    }])

    .controller('GalleryCtrl', ['$scope', '$timeout', '$location', 'API', '$rootScope', function ($scope, $timeout, $location, API,  $rootScope) {
        // Initializing watched variables
        $scope.images = []; // Array of images, to be populated using a service
        $scope.photo = {}; // Selected image for photo viewer - empty initially
        $scope.photoView = false; // Whether or not photo view is currently on - initially false
        $scope.imagesLoaded = 0;

        // Count the number of images loaded by watching imageLoaded event
        // Once it hits the number of images, refresh xgallerify
        $scope.$on("imageLoaded", function() {
            $scope.imagesLoaded++;
            if($scope.imagesLoaded == $scope.images.length)
                $scope.refreshGallery();
        });

        // Code for gallery
        $scope.refreshGallery = function () {
            // Using timeout to run it after digest cycle in AngularJS
            $timeout(function () {
                $scope.$broadcast("angular-xGallerify.refresh"); // Makes xGallerify to recreate gallery
            });
        };
        $scope.successGallery = function (data) {
            $scope.images = data.data;
            $scope.loadingGallery = false;
        };

        $scope.failureGallery = function (data) {
            $scope.loadingGallery = false;
        };


        // Code for photo viewer
        $scope.successLoad = function (data) {
            // Successfully loaded photo
            $scope.photo = data.data;
            $scope.loadingPhoto = false;
        };
        $scope.failureLoad = function(data) {
            // Failed in loading photo
            $scope.loadingPhoto = false;
        }
        $scope.openPhoto = function (id) {
            // Open photo viewer
            $scope.photoView = true;
            $scope.loadingPhoto = true;
            API.getDetails(id, $rootScope.accessToken, $scope.successLoad);
        };
        $scope.closePhoto = function () {
            // Close photo viewer
            $scope.photo = {};
            $scope.photoView = false;
        };
        $scope.like = function(photo) {
            // Like photo
            API.likePhoto(photo.id, $rootScope.accessToken);
            photo.liked = true;
        };



        $scope.loadingGallery = true; // Set loading status
        API.getGallery($scope.successGallery, $scope.failureGallery); // Call server to get gallery data
    }]);

