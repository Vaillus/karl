var ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db) {

app.get('/clothes/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    db.collection('clothes').findOne(details, (err, item) => {
      if (err) {
        res.send({'error':'An error has occurred'});
      } else {
        res.send(item);
      } 
    });
  });
	app.delete('/clothes/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    db.collection('clothes').remove(details, (err, item) => {
      if (err) {
        res.send({'error':'An error has occurred'});
      } else {
        res.send('Note ' + id + ' deleted!');
      } 
    });
  });
	app.put('/clothes/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    const note = { name: req.body.name, 
    	category: req.body.category, 
    	bodyparts: req.body.bodyparts, 
    	colors: req.body.colors, 
    	fabrics: req.body.fabrics, 
    	temperature: req.body.temperature, 
    	brands:  req.body.brands};
    db.collection('clothes').update(details, note, (err, result) => {
      if (err) {
          res.send({'error':'An error has occurred'});
      } else {
          res.send(note);
      } 
    });
  });
  const collection = 
  app.post('/clothes', (req, res) => {
    const clothe = { name: req.body.name, 
    	category: req.body.category, 
    	bodyparts: req.body.bodyparts, 
    	colors: req.body.colors, 
    	fabrics: req.body.fabrics, 
    	temperature: req.body.temperature, 
    	brands:  req.body.brands};
    db.collection('clothes').insert(clothe, (err, result) => {
      if (err) { 
        res.send({ 'error': 'An error has occurred' }); 
      } else {
        res.send(result.ops[0]);
      }
    });
  });
};