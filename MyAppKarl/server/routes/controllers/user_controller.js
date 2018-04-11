
const User = require('../../models/user')

module.exports = function(router){

	router.post('/user', (req,res) => {
		console.log(req.body);
		var user = new User();
		user.username = req.body.username
		user.givenname = req.body.givenname
		user.accesstoken = req.body.accesstoken

		user.save((err, id) => {
			if(err){
				console.log("Couldn't register : " + err)
				res.json({"success" : false, "err"  : err})
			}else{
				res.json({"success" : true, "id": id})
			}
		})
		
	})

	router.get('/user/:userId', (req,res) => {
		User.findById(req.params.userId).exec((err, user) => {
			if(err){
				console.log("Couldn't find user error : " + err)
				res.json({"success" : false, "err"  : err})
			}else if(user){
				res.json({"success" : true, "user": user})
			}else{
				console.log("Couldn't find user ")
				res.json({"success" : false})
			}
		})
		
	})

	router.get('/users', (req, res) => {
		User.find({}, (err, users) => {
			if(err){
				console.log("Couldn't find users error : " + err)
				res.json({"success" : false, "err"  : err})
			}else if(users){
				res.json({"success" : true, "users": users})
			}else{
				console.log("Couldn't find users ")
				res.json({"success" : false})
			}
		})
	})


}