angular.module('app').directive('mnMenu', [function () {
    return {
        replace: true,
        restrict: 'EA',
        scope: true,
        templateUrl: 'app/menu/menu.html',
        controller: 'menuController'
    }
}]);