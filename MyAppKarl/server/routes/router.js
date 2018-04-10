const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const dburl = require('../db_url')


require('./controllers/user_controller')(router);
require('./controllers/cloth_controller')(router);

mongoose.connect(dburl.url, (err) =>{
	if(err){
		console.log('Not connected to MongoDB database: ' + err)
	}else{
		console.log('Successfully connected to MongoDB database')
	}
})

router.get('/', (req,res) => {
	res.send("hello")
})

module.exports = router