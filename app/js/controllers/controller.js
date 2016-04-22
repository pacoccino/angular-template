angularApp.controller('Controller', ['$scope', 'service', function($scope, service) {
    var str = "bonjour";

    $scope.hector = service.uppercase(str);
}]);