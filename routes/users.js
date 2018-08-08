var express = require('express');
var router = express.Router();
var User = require('../Domain/User');
var mongoose = require('mongoose');
var weatherapi = require('../Service/weatherbit');
var africastalking = require('../Service/africastalking');

/* post user. */
router.post('/', function(req, res, next) {
    const user1 = new User({
         _id: new mongoose.Types.ObjectId(),
         name: req.body.name,
         location: req.body.location,
         country:req.body.country,
         phonenumber:req.body.country,
     });
    user1.save().then(res1 => {
        console.log(res);
        res.status(200).json(res1);
    }).catch(error1=>res.status(500).json(error1));
});

/* GET user by name(param) */
router.get('/', function(req, res, next) {
  User.findOne({name:req.query.name}).exec().then(res1 => {
      res.status(200).json(res1);
  }).catch(err => {res.status(500).json(err)});
});

/* GET all users */
router.get('/all', function(req, res, next) {
   User.find().exec().then(res1 => {
       let users = [];
       users = res1;
       console.log(users);
       res.status(200).json(res1);
   });
});

module.exports = router;
