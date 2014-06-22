'use strict';

angular.module('app').factory('menuFactory', ['$state', function ($state) {
    var factory = {
        brandMenuItem: {title: 'MBI', sref: 'home'},
        navigationItems: [
            {title: 'HOME', sref:'home'},
            {title: 'CONTACT', sref:'contact'}
        ]
    };

    factory.isActive = function (sref) {
        return $state.includes(sref);
    };

    factory.isCollapsed = true;

    return factory;
}]);