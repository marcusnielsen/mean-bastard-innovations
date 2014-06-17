'use strict';

module.exports = function (express, app, config) {
    var router = express.Router();

    router.get('/', function (req, res) {
        res.render('index.server.html', {title: config.app.title});
    });

    router.get('/404', function (req, res) {
        res.render('404.server.html', {message: 'The path was not found.'});
    });

    app.use('/', router);
};