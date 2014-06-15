'use strict';

module.exports = function (app) {
    var swig = require('swig');
    app.engine('html', swig.renderFile);
    app.set('views', __dirname);
};