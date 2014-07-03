'use strict';

require('angular/angular');

require('angular-ui-bootstrap/ui-bootstrap');
require('angular-translate/angular-translate');
require('angular-translate-loader-static/angular-translate-loader-static-files');
var uiRouterName = require('angular-ui-router');
var theme = require('./components/theme');
var menu = require('./menu');
var contact = require('./contact');
var home = require('./home');


var app = angular.module('app', [
    uiRouterName,
    'ui.bootstrap',
    'pascalprecht.translate',
    theme.name,
    menu.name,
    home.name,
    contact.name
]);

app.constant('version', require('../../package.json').version);
app.config(require('./app-config'));
app.controller('appController', require('./app-controller'));