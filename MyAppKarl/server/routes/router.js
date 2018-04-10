const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const User = require('../models/user')

mongoose.connect('mongodb://Admin:admin@ds139459.mlab.com:39459/karl', (err) =>{
	if(err){
		console.log('Not connected to MongoDB database: ' + err)
	}else{
		console.log('Successfully connected to MongoDB database')
	}
})

router.get('/', (req,res) => {
	res.send("hello")
})

router.post('/user', (req,res) => {
	var user = new User();
	user.username = req.body.username
	user.password = req.body.password

	user.save((err) => {
		if(err){
			console.log("Couldn't register : " + err)
			res.json({"success" : false, "err"  : err})
		}else{
			res.json({"success" : true})
		}
	})
	
})

router.get('/user/:userId', (req,res) => {
	User.findById(req.params.userId).exec((err, user) => {
		if(err){
			console.log("Couldn't find user error : " + err)
			res.json({"success" : false})
		}else if(user){
			res.json({"success" : true, "user": user})
		}else{
			console.log("Couldn't find user ")
			res.json({"success" : false})
		}
	})
	
})

module.exports = router