var schedule = require('node-schedule');
 
exports.sendforecast = function() {
    var sendforecast = schedule.scheduleJob('04 * * * *', function() {
      // task
    });
}