'use strict';

angular.module('app').factory('themeFactory', ['$http', function ($http) {
    var themes = [];

    $http.get('//api.bootswatch.com/3/').success(function (data) {
        themes = _.map(data.themes, function (theme) {
            return {name: theme.name, cssCdn: theme.cssCdn};
        });
    });

    return {
        selected: {name: 'flatly', cssCdn: '//netdna.bootstrapcdn.com/bootswatch/latest/flatly/bootstrap.min.css'},
        themes: themes
    };
}])