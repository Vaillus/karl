// Require express and create an instance of it
var express = require('express');
var bodyParser = require('body-parser')
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var first = require('./routes/first');
var clothes = require('./routes/clothes');
app.use('/api/first', first);
app.use('/api/clothes', clothes);

module.exports = app;
