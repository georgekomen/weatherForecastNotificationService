var schedule = require('node-schedule');
var SendforecastI = require('../ServiceImpl/sendforecasts');
 
exports.sendforecast = function() {
    var sendforecast = schedule.scheduleJob('00 10 * * *', function() { //sec,min,hour,date,month,day
       SendforecastI.sendforecasts(null, null, null);
    });
}