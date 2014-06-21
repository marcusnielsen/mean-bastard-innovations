'use strict';

angular.module('app').controller('contactController', ['$scope', 'contactFactory', function ($scope, contactFactory) {
    $scope.contact = contactFactory;
}]);