angular.module('app', [])
.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when("/", {template:"<h2>Welcome to the Crew Explorer</h2>"}).
        when("/Enterprise-D", {template: "<h2>Enterprise D!</h2>"}).
        when("/Voyager", {template: "<h2>Voyager!</h2>"});
}])
.controller('AppCtrl', ['$scope', '$rootScope', '$location', function($scope, $rootScope, $location) {
    $rootScope.$on("$routeChangeSuccess", function () {
        $scope.newLocation = $location.path();
    });

    $scope.checkActive = function (url) {
        if (url == "#" + $scope.newLocation) {
            return "active";
        } else {
            return "";
        }
    }
}]);
