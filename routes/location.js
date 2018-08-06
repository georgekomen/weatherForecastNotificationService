var express = require('express');
var router = express.Router();
var expressValidator = require('express-validator');
router.use(expressValidator())

/* GET home page. */
router.get('/location', function(req, res, next) {
  res.send('ascfas');
});

module.exports = router;