'use strict';

module.exports = function (express, app, config) {
    var router = express.Router();

    router.get('/', function (req, res) {
        res.render('index.server.html', {title: config.app.title});
    });

    app.use('/', router);
};