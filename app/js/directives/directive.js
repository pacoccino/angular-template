angularApp.directive('directive', ['$timeout', function($timeout) {

    return {
        restrict: 'E',
        templateUrl: "templates/directive.html",
        scope: {
            display: '='
        },
        link: function(scope, element) {
        }
    };
}]);