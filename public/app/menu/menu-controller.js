'use strict';

angular.module('app').controller('menuController', ['$scope', 'menuFactory', function ($scope, menuFactory) {
    $scope.menu = menuFactory;
}]);