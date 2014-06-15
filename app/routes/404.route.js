'use strict';

module.exports = function (express, app) {
    var router = express.Router();

    router.get('*', function (req, res) {
        res.render('404.server.html', {url: req.url});
    });

    app.use('*', router);
};