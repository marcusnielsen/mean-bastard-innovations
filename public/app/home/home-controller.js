'use strict';

angular.module('app').controller('homeController', ['$scope', 'homeFactory', function ($scope, homeFactory) {
    $scope.home = homeFactory;
}]);