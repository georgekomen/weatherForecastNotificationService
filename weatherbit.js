const request = require("request")
exports.forecast = function() {
    request.get({url: 'http://api.weatherbit.io/v2.0/forecast/daily', 
        qs: {
            'city'      : 'Nakuru',
            'country'   : 'Kenya',
            'key'  : '96799479978e4b6bbb2c9cffda8d3fd8',
            'days': 1
        }
    },
    function(err, response, body) {
        console.log(err, body);
    });
}