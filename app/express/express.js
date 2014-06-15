'use strict';

module.exports = function (db, config) {
    var express = require('express');
    var app = express();
    require('../views/swig.js')(app);
    var bodyParser = require('body-parser');
    require('../routes/all.route.js')(express, app, config);

    app.use(bodyParser.urlencoded());
    app.use(bodyParser.json());

    return app;
};