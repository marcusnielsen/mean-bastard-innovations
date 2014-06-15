'use strict';

module.exports = function (express, app) {
    var router = express.Router();

    // TODO: define router.route(...)

    app.use('/api/v1', router);
};