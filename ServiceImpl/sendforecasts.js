var weatherapi = require('../Service/weatherbit');
var africastalking = require('../Service/africastalking');
var User = require('../Domain/User');

exports.sendforecasts = function(req, res, next) {
    User.find().exec().then(res1 => {
        res1.forEach(res2 => {
            if (res2.country != undefined && res2.country != null && 
                res2.location != undefined && res2.location != null) {
                    var weatherforecast = weatherapi.forecast(res2.location, res2.country);
                    console.log("Haya basi: ", weatherforecast);
                }
        });
       res.status(200).json(res1);
    });
}