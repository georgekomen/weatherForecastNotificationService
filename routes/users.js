var express = require('express');
var router = express.Router();
var User = require('../Domain/User');
var mongoose = require('mongoose');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


/* post user. */
router.post('/', function(req, res, next) {
    const user1 = new User({
         _id: new mongoose.Types.ObjectId(),
         name: req.body.name
     });
    user1.save().then(res1 => {
        console.log(res);
        res.status(200).json(res1);
    }).catch(error1=>res.status(500).json(error1));
});

module.exports = router;
