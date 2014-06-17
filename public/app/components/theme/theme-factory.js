'use strict';

angular.module('app').factory('themeFactory', ['$http', function ($http) {
    var publicObj = {};

    publicObj.selected = {
        name: 'flatly',
        cssCdn: '//netdna.bootstrapcdn.com/bootswatch/latest/flatly/bootstrap.min.css'
    };

    publicObj.themes = [];

    $http.get('//api.bootswatch.com/3/').success(function (data) {
        publicObj.themes = _.map(data.themes, function (theme) {
            return {name: theme.name, cssCdn: theme.cssCdn};
        });
    });

    publicObj.setRandomTheme = function () {
        publicObj.selected = publicObj.themes[Math.floor(Math.random() * publicObj.themes.length)];
    };

    return publicObj;
}])