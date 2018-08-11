var weatherapi = require('../Service/weatherbit');
var africastalking = require('../Service/africastalking');
var User = require('../Domain/User');

exports.sendforecasts = function(req, res, next) {
    var weatherforecast = weatherapi.forecast();
    console.log(weatherforecast);
    User.find().exec().then(res1 => {
        let users = [];
        users = res1;
        users.forEach(res => {
          console.log(res.country);
        });
       res.status(200).json(res1);
    });
}