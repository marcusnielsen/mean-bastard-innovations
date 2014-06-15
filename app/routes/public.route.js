'use strict';

module.exports = function (express, app) {
    var path = require('path');
    var staticPath = path.join(__dirname + '/../..' + '/public');
    app.use(express.static(staticPath));
};