var x = getClothes_cold()

function getClothes_cold(){

	var MongoClient = require('mongodb').MongoClient;
	var url = "mongodb://localhost:27017/";

	MongoClient.connect(url, function(err, db) {
	  if (err) throw err;
	  var dbo = db.db("karl");
	  dbo.collection("clothes").find({ temperature: { $gt: 2 }, category: {$ne : 'short'} }, { _id: 1 }).toArray(function(err, result) {
	    if (err) throw err;
	    jsonresult = JSON.stringify(result);
	    console.log(jsonresult);
    	db.close();
  });
}); 
}