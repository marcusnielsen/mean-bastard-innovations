'use strict';
var config = require('./config/env/all.js');

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var skillSchema = new Schema({
    name: {
        type: String,
        default: '',
        required: 'Name required',
        trim: true
    },
    score: {
      type: Number,
      required: 'Score required',
      min: 1,
      max: 100
    },
    parent: {
        type: Schema.ObjectId,
        ref: 'Skill'
    }
});

var Skill = mongoose.model('Skill', skillSchema);

mongoose.connect(config.db);

mongoose.connection.db.executeDbCommand({dropDatabase: 1}, function(err, result) {
    if(err) {
        console.log("drop database fail.");
    }
});

var programmingSkill = new Skill({name: 'Programming', score: 70});
programmingSkill.save(function(err) {
    if(err)
    {
        console.log(err);
    }
});

var meanSkill = new Skill({name: 'MEAN Stack', score: 20, parent: programmingSkill._id});
meanSkill.save(function (err) {
    if(err)
    {
        console.log(err);
    }
});

Skill.find(function(err, skills) {
    console.log(skills);
});

var app = require('express')();
var swig = require('swig');

app.engine('html', swig.renderFile);
app.set('views', __dirname + '/app/views');

app.get('/', function(req, res) {
    res.render('index.server.html', {title: config.app.title});
});

app.listen(3000);