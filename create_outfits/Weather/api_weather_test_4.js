var condition = getTodaysWeather(615702);
return condition;

function getTodaysWeather(woeid){
	if(!woeid) woeid = 615702;
	var YQL = require('yql');
	var query = new YQL("select * from weather.forecast where woeid = " + woeid + " and u = 'c'");

	query.exec(function(err, data) {
		if(err) return err;
	  	var condition = data.query.results.channel.item.condition;
	  	console.log(condition);

	});
}