'use strict';

angular.module('app').config(['$compileProvider', '$stateProvider', '$urlRouterProvider',
    function($compileProvider, $stateProvider, $urlRouterProvider){

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