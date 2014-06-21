'use strict';

angular.module('app').factory('contactFactory', ['$sce', function($sce) {
    var factory = {
        gravatar: '//www.gravatar.com/avatar/e315a74098fe0a99aa351b760459dcc7.png',
        name: 'Marcus Nielsen',
        email: 'marcus.nielsen82@gmail.com',
        phone: '+46725223325',
        linkedIn: '//se.linkedin.com/in/marcusnielsendeveloper',
        country: 'Sweden',
        town: 'Östersund',
        postalCode: '83131',
        street: 'Storgatan',
        streetCode: '25'
    };

    factory.getGoogleMapsEmbeddedUrl = function () {
        var url = $sce.trustAsResourceUrl('https://www.google.com/maps/embed/v1/place?key=AIzaSyCVy5VQQAoslkELD80I3v_hfkkZv3DsYos&q='
            + factory.street + '+' + factory.streetCode + '+' + factory.town + '+' + factory.country);
        return url;
    };

    factory.getGoogleMapsLinkUrl = function () {
        var url = '//maps.google.com/?q='
            + factory.street + '+' + factory.streetCode + '+' + factory.town + '+' + factory.country;
        return url;
    };

    return factory;
}]);