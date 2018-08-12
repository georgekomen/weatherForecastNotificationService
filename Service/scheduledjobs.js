var schedule = require('node-schedule');
var SendforecastI = require('../ServiceImpl/sendforecasts');
 
exports.sendforecast = function() {
    var sendforecast = schedule.scheduleJob('55 * * * *', function() {
       SendforecastI.sendforecasts(null, null, null);
    });
}