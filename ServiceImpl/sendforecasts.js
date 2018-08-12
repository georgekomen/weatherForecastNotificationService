var weatherapi = require('../Service/weatherbit');
var africastalking = require('../Service/africastalking');
var User = require('../Domain/User');

exports.sendforecasts = function(req, res, next) {
    User.find().exec().then(res1 => {
        res1.forEach(res2 => {
            if (res2.country != undefined && res2.country != null && 
                res2.location != undefined && res2.location != null &&
                !isNaN(res2.phonenumber)) {
                    weatherapi.forecast(res2.location, res2.country).then(res3 => {
                        var weatherforecast = JSON.parse(res3);
                        africastalking.sendMessage(res2.phonenumber, `Hi ${res2.name}, Mobias Weather forecast for tommorow: temperature: ${weatherforecast.data[0].temp}`);
                        });
                }
        });
        if (res) {
           res.status(200).json(res1);
        }
    });
}