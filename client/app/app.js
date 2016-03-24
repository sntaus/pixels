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
    .controller('HomeCtrl', ['$scope', '$rootScope', '$cookies', 'API', '$window', function($scope, $rootScope, $cookies, API, $window) {
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
        }

        // Code for login view
        $scope.openLogin = function() {
            $scope.loginView = true;
        };
        $scope.closeLogin = function() {
            $scope.loginView = false;
        };
        $scope.loginSuccess = function(data) {
            $scope.loadingLogin = false;
            if(data.data.error == null){
                $scope.loadingError = false;
                var access_token = data.data.oauth_token;
                var token_secret = data.data.oauth_secret;

                // Store login info as cookie
                $cookies.put("access_token", data.data.oauth_token);
                $cookies.put("token_secret", data.data.oauth_token_secret);
                $cookies.put("loggedIn", true);
                $window.location.reload(); // Reload to log user in
            }
            else{
                $scope.loadingError = true;
            }
        };
        $scope.loginFailure = function() {
            $scope.loadingLogin = false;
            $scope.loginError = true;
        };
        $scope.login = function() {
            $scope.loadingLogin = true;
            API.login($scope.usernameLogin, $scope.passwordLogin, $scope.loginSuccess, $scope.loginFailure);
        };

        $scope.logout = function() {
            $cookies.remove("loggedIn");
            $cookies.remove("access_token");
            $cookies.remove("token_secret");
            $window.location.reload();
        }

    }]);