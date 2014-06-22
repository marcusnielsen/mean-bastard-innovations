'use strict';

angular.module('app').controller('appController', ['$scope', '$translate', 'themeFactory', function ($scope, $translate, themeFactory) {
    $scope.theme = themeFactory;
    $scope.translate = $translate;
}]);