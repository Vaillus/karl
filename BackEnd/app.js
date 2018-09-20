// Require express and create an instance of it
var express = require('express');
var app = express();

var first = require('./routes/first');
app.use('/api/first', first);

module.exports = app;
