'use strict';

angular.module('app').controller('appController', ['$scope', 'themeFactory', function ($scope, themeFactory) {
    $scope.theme = themeFactory;
}]);