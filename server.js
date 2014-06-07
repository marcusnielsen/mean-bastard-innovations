'use strict';

var app = require("express")();
var mongoose = require("mongoose");
var swig = require("swig");

app.engine('html', swig.renderFile);
app.set('views', __dirname + '/app/views');

app.get('/', function(req, res) {
    res.render('index.server.html', {title: 'TODO'});
});

app.listen(3000);