'use strict';

// Declare app level module which depends on views, and components
angular.module('pixels', [
        'ngRoute',
        'pixels.gallery',
        'pixels.photo',
        'ngAnimate'
    ])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/gallery'});
    }])
    .controller("HomeCtrl", ['$rootScope', '$scope', 'baseUrl', function ($rootScope, $scope, baseUrl) {


    }]);