'use strict';

angular.module('app').factory('menuFactory', ['$state', 'themeFactory', function ($state, themeFactory) {
    var factory = {
        brandMenuItem: {title: 'MBI', sref: 'home'},
        navigationItems: [
            {title: 'Home', sref:'home'},
            {title: 'Contact', sref:'contact'}
        ],
        settingsItems: [
            {title: 'Language', command: 'TODO'},
            {title: 'Theme', command: 'TODO'}
        ]
    };

    factory.isActive = function (sref) {
        return $state.includes(sref);
    };

    factory.isCollapsed = true;

    return factory;
}]);