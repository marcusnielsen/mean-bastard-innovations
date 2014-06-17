'use strict';

module.exports = function (express, app) {
    var router = express.Router();

    router.get('*', function (req, res) {
        res.status(404).render('404.server.html', {message: 'The path ' + req.url + ' was not found.'});
    });

    app.use('*', router);
};