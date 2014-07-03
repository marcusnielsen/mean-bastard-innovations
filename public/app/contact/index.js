'use strict';

module.exports = angular.module('mn.contact', [])
    .factory('mnContactFactory', require('./contact-factory'))
    .controller('mnContactController', require('./contact-controller'));