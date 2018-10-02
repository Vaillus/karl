var client = require('../helpers/mongoClient');
var Schema = client.Schema;

var schema = new Schema({
	idGoogle : Number,
	firstName : String,
	lastName : String,
	givenName : String,
	email : String,
	age : Number,
	genre : String
	//add tastes
}, {versionKey: 'version'});



module.exports = client.model('users', schema);
