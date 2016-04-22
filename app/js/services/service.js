
angularApp.service('service', ["$http", function($http) {

    return {
        uppercase: function(str) { return str.toUpperCase(); }
    };
}]);