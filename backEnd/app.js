// Require express and create an instance of it
var express = require('express');
var bodyParser = require('body-parser')
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var first = require('./routes/first');
var clothes = require('./routes/clothes'); //ajouter un truc comme ca quand on crée une nouvelle "class"
app.use('/api/first', first); 
app.use('/api/clothes', clothes); //ajouter un truc comme ca quand on crée une nouvelle "class"

module.exports = app;
