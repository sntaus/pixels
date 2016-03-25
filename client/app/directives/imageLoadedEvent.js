angular.module('pixels')
    .directive('imageLoadedEvent', function () {
        return {
            restrict: 'A',
            link: function (scope, element, attr) {
                // Emit "imageLoaded" event every time an image loads
                element.find("img").bind("load", function(){
                    scope.$emit("imageLoaded");
                });
            }
        }
    });