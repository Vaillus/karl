const mongoose = require('mongoose')

var ClothSchema = new mongoose.Schema({
	name: {type : String, lowercase : true, required: true},
	category: {type : String, lowercase : true, required: true},
	bodyparts: {type : [Number], required: true},
	colors: {type : String, lowercase : true, required: true},
	fabrics: {type: String, lowercase : true, required: false},
	temperature: {type: Number, lowercase : true, required: false},
	brands: { type: String, required: false},
})

module.exports = mongoose.model('Cloth', ClothSchema)