const mongoose = require('mongoose')

var UserSchema = new mongoose.Schema({
	username: {type : String, lowercase : true, required: true, unique: true},	//email
	givenname: {type: String, required: true},
	accesstoken: {type: String, required: true},
})

module.exports = mongoose.model('User', UserSchema)