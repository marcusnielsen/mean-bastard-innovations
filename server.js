'use strict';

var config = require('./app/config/env/all.js');
var mongoose = require('mongoose');
//TODO: Setup with MongoLabs when needed.
// var db = mongoose.connect(config.db);
//TODO: require('../passport/passport.js')();
var app = require('./app/express/express.js')(db, config);

app.listen(config.port);
console.log('Server listening on port ' + config.port);