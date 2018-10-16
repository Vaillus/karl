var client = require('../helpers/mongoClient');
var Schema = client.Schema;

var userSchema = new Schema({
	idGoogle : Number,
	firstName : String,
	lastName : String,
	givenName : String,
	email : String,
	age : Number,
	genre : String,
	tastes : [{type: Schema.ObjectId, ref: 'Task'}]
}, {versionKey: 'version'});

var tasteSchema = new Schema({
    decision : Boolean,
    clothes : [String]
    user : {type: Schema.ObjectId, ref: 'User'}
});


module.exports = client.model('users', schema);
