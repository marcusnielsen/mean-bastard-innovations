'use strict';

angular.module('app').factory('menuFactory', ['$state', 'themeFactory', function ($state, themeFactory) {
    var isActive = function (sref) {
        return $state.includes(sref);
    };

    return {
        brandMenuItem: {title: 'MBI', sref: 'home'},
        navigationItems: [
            {title: 'Home', sref:'home'},
            {title: 'Contact', sref:'contact'}
        ],
        settingsItems: [
            {title: 'Language', command: 'TODO'},
            {title: 'Theme', command: 'TODO'}
        ],
        isActive: isActive
    };
}]);