angular.module('pixels')
    .directive('onRender', function () {
        return {
            restrict: 'A',
            link: function (scope, element, attr) {
                // Run on-render function every time the element gets rendered
                element.find("img").bind("load", function(){
                    scope.$eval(attr.onRender);
                });
            }
        }
    });