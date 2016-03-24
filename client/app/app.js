'use strict';

// Declare app level module which depends on views, and components
angular.module('pixels', [
        'ngRoute',
        'pixels.gallery',
        'ngAnimate',
        'ngCookies'
    ])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/gallery'});
    }])
    .controller('HomeCtrl', ['$scope', '$rootScope', '$cookies', 'API', function($scope, $rootScope, $cookies, API) {
        // Initialize variables
        $rootScope.loggedIn = false; // Whether or not user is logged in
        $rootScope.accessToken = {}; // If user is logged in, user access data
        $scope.loginView = false; // Whether or not login view is on
        $scope.usernameLogin = ''; // Username entered
        $scope.passwordLogin = ''; // Password entered


        // Check if logged in
        if($cookies.get("loggedIn")) {
            // Retain login info
            $rootScope.loggedIn = true;
            $rootScope.accessToken = {
                'access_token': $cookies.get('access_token'),
                'token_secret': $cookies.get('token_secret')
            };
            console.log($rootScope.accessToken);
        }

        // Code for login view
        $scope.openLogin = function() {
            $scope.loginView = true;
        };
        $scope.closeLogin = function() {
            $scope.loginView = false;
        };
        $scope.loginSuccess = function(data) {
            console.log(data.data);
            if(data.data.error == null){
                var access_token = data.data.oauth_token;
                var token_secret = data.data.oauth_secret;
                // Store login info as cookie
                $cookies.put("access_token", data.data.oauth_token);
                $cookies.put("token_secret", data.data.oauth_token_secret);
                $cookies.put("loggedIn", true);
            }
            else{
            }
        };
        $scope.loginFailure = function() {
            alert("error fail");
        };
        $scope.login = function() {
            API.login($scope.usernameLogin, $scope.passwordLogin, $scope.loginSuccess, $scope.loginFailure);
        };

    }]);