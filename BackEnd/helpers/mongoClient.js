var mongoose = require('mongoose');

mongoose.connect('mongodb://Admin:admin@ds139459.mlab.com:39459/karl', { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("Connection to mongoDB established");
});

module.exports = mongoose;
