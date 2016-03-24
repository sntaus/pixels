'use strict';

angular.module('pixels').directive('photo', function(){
    return {
        templateUrl: 'photo/photo.html'
    }
});
/*
angular.module('pixels.photo', ['ngRoute', 'ngAnimate'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/photo/:photoid', {
            templateUrl: 'photo/photo.html',
            controller: 'PhotoCtrl'
        });
    }])

    .controller('PhotoCtrl', ['$scope', '$routeParams', 'API', function ($scope, $routeParams, API) {

        // Sample data
        $scope.photo = {
            url: '',
            avatar: '',
            caption: '',
            liked: null
        };

        $scope.successLoad = function(data){
            $scope.photo = data.data;
        };

        $scope.failureLoad = function(data) {

        };

        API.getDetails($routeParams.photoid, $scope.successLoad, $scope.failureLoad);


    }]);

    */