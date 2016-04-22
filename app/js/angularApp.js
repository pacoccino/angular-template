var angularApp = angular.module(angularConfig.appName, angularConfig.moduleDependencies);

angularApp.config(['$routeProvider', function ($routeProvider) {
    console.log("a")
    $routeProvider
        .when('/main', {
            templateUrl: 'templates/template.html',
            controller: 'Controller'
        })
        .otherwise({
                       redirectTo: '/main'
                   });

}]);
