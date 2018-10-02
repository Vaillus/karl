var express = require('express');
var router = express.Router();
var controller = require('../controllers/users');

router.post('/', controller.create);

router.get('/', controller.get);

router.put('/', controller.update);

router.delete('/', controller.del);


module.exports = router;
