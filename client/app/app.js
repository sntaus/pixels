'use strict';

// Declare app level module which depends on views, and components
angular.module('pixels', [
        'ngRoute',
        'pixels.gallery',
        'ngAnimate'
    ])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/gallery'});
    }]);