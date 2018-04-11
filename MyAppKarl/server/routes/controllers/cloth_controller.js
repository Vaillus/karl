const Cloth = require('../../models/cloth')
var spawn = require("child_process").spawn;

module.exports = function(router){

	router.post('/cloth', (req,res) => {
		console.log(req.body);
		var cloth = new Cloth();
		

		cloth.save((err, id) => {
			if(err){
				console.log("Couldn't register : " + err)
				res.json({"success" : false, "err"  : err})
			}else{
				res.json({"success" : true, "id": id})
			}
		})
		
	})

	router.get('/cloth/:clothId', (req,res) => {
		Cloth.findById(req.params.clothId).exec((err, cloth) => {
			if(err){
				console.log("Couldn't find cloth error : " + err)
				res.json({"success" : false})
			}else if(cloth){
				res.json({"success" : true, "cloth": cloth})
			}else{
				console.log("Couldn't find cloth ")
				res.json({"success" : false})
			}
		})
		
	})

	router.get('/clothes', (req, res) => {
		Cloth.find({}, (err, clothes) => {
			if(err){
				console.log("Couldn't find clothes error : " + err)
				res.json({"success" : false})
			}else if(clothes){
				console.log(clothes);
				res.json({"success" : true, "clothes": clothes})
			}else{
				console.log("Couldn't find clothes ")
				res.json({"success" : false})
			}
		})
	})

}