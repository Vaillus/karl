var express = require('express');
var router = express.Router();
var Controller = require('../controllers/first');

router.post('/', Controller.create);

router.get('/', Controller.get);
router.get('/id', Controller.getID);

router.put('/', Controller.update);

router.delete('/', Controller.del);


module.exports = router;
