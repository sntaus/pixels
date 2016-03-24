angular.module('pixels')
    .directive('imageLoadedEvent', function () {
        return {
            restrict: 'A',
            link: function (scope, element, attr) {
                // Run function every time an image renders
                element.find("img").bind("load", function(){
                    scope.$emit("imageLoaded");
                });
            }
        }
    });