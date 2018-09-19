var conditions = getTodaysWeather();

function getTodaysWeather(woeid){
	if(!woeid) woeid = parseInt(process.argv[2]);
	var YQL = require('yql');
	var query = new YQL("select * from weather.forecast where woeid = " + woeid + " and u = 'c'");

	query.exec(function(err, data) {
		if(err) return err;
	  	var condition = data.query.results.channel.item.condition;

	  	var conditions = '{'
	       +'"temp" : '+condition['temp']+','
	       +'"climate" : "'+condition['text']+'"'
	       +'}';

		console.log(conditions);
	    
	});

	return conditions;
}