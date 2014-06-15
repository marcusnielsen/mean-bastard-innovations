'use strict';

module.exports = function (express, app, config) {
    require('./public.route.js')(express, app);
    require('./api.route.js')(express, app);
    require('./app.route.js')(express, app, config);
    require('./404.route.js')(express, app);
};