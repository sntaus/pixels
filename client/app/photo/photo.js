'use strict';

angular.module('pixels.photo', ['ngRoute', 'ngAnimate'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/photo/:photoid', {
    templateUrl: 'photo/photo.html',
    controller: 'PhotoCtrl'
  });
}])

.controller('PhotoCtrl', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {

    // Sample data
    $scope.photo = {
      url: "https://scontent-sea1-1.xx.fbcdn.net/hphotos-xaf1/t31.0-8/1974234_10203208776200749_673168005_o.jpg",
      avatar: "https://scontent-sea1-1.xx.fbcdn.net/hphotos-xaf1/t31.0-8/1974234_10203208776200749_673168005_o.jpg",
      caption: "TEDx conference 2014!",
      likes: 20,
      liked: true
    };
}]);