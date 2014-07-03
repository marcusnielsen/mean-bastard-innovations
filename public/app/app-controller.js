'use strict';

module.exports = ['$scope', '$translate', 'mnThemeFactory', function ($scope, $translate, mnThemeFactory) {
    $scope.theme = mnThemeFactory;
    $scope.translate = $translate;
}];