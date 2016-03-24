angular.module('pixels')
    .directive('onRenderFinish', function () {
        return {
            restrict: 'A',
            link: function (scope, element, attr) {
                element.find("img").bind("load", function(){
                    scope.$eval(attr.onRenderFinish);
                });



            }
        }
    });