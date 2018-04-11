const Cloth = require('../../models/cloth')

module.exports = function(router){

	router.post('/cloth', (req,res) => {
		console.log(req.body);
		var cloth = new Cloth();
		cloth.name = req.body.name
		cloth.category = req.body.category
		cloth.bodyparts = req.body.bodyparts
		cloth.colors = req.body.colors
		cloth.fabrics = req.body.fabrics
		cloth.temperature = req.body.temperature
		cloth.brands = req.body.brands

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


	router.get('/clothes/outfitsuggestion/test/:userId', (req, res) => {
		userId = req.params.userId;
		res.json({
			"success": true,
			"clothes": [
				{
					"bodyparts": [
						2,
						3,
						4,
						5,
						8
					],
					"_id": "5a37db5af128eb034baa558c",
					"name": "regular red tshirt",
					"category": "tshirt",
					"colors": "red",
					"fabrics": "cotton",
					"temperature": 1
				},
				{
					"bodyparts": [
						4,
						11,
						12,
						14,
						15
					],
					"_id": "5a37d0077a640bb69e695f08",
					"name": "regular blue jeans",
					"category": "pants",
					"colors": "blue",
					"fabrics": "jean",
					"temperature": 5,
					"brands": "Zara"
				},
				{
					"bodyparts": [
						1,
						2,
						3,
						5,
						6,
						8,
						9
					],
					"_id": "5a37efd8f128eb034baa55c8",
					"name": "ghetto hoodie",
					"category": "hoodie",
					"colors": "black",
					"fabrics": "cotton",
					"temperature": 4
				},
				{
					"bodyparts": [
						2,
						3,
						5,
						6,
						8,
						9
					],
					"_id": "5a37efd8f128eb034baa55ce",
					"name": "jean jacket",
					"category": "jacket",
					"colors": "blue",
					"fabrics": "jean",
					"temperature": 4
				},
			]
		});
	});


}