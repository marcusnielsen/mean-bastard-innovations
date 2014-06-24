'use strict';

angular.module('app').config(['$compileProvider', '$translateProvider', '$stateProvider', '$urlRouterProvider',
    function($compileProvider, $translateProvider, $stateProvider, $urlRouterProvider){

        $translateProvider.useStaticFilesLoader({
            prefix: '/localization/',
            suffix: '.json'
        });

        $translateProvider.preferredLanguage('en_US');

        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|mailto|tel):/);

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'app/home/home.html',
                controller: 'homeController'
            })
            .state('contact', {
                url: '/contact',
                templateUrl: 'app/contact/contact.html',
                controller: 'contactController'
            });
}]);