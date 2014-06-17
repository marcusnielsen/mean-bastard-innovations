'use strict';

angular.module('app').factory('contactFactory', [function() {
    return {
        firstName: 'Marcus',
        lastName: 'Nielsen',
        email: 'marcus.nielsen82@gmail.com',
        phone: '+46725223325',
        linkedIn: 'http://se.linkedin.com/pub/marcus-nielsen/31/1a4/509/',
        location: {
            country: 'Sweden',
            town: 'Östersund',
            postalCode: '83131',
            street: 'Storgatan',
            streetCode: '25'
        }
    };
}]);