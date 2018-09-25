var fs = require("fs");
var contents = fs.readFileSync("lo.txt");
var input = JSON.parse(contents);

var spawn = require('child_process').spawn
var py    = spawn('python', ['scriptgetOutfit.py', 'return_outfit', contents])

/*Here we are saying that every time our node application receives data from the python process output stream(on 'data'), we want to convert that received data into a string and append it to the overall dataString.*/
py.stdout.on('data', (data) => {
	res = JSON.parse(data.toString().replace(/'/g, '"'))
  	console.log(res.clothes)
});
