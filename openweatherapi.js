var querystring = require('querystring');
var https = require('https');
exports.forecast = function() {
    // Build the post string from an object
    var post_data = querystring.stringify({
        'q'      : 'Nakuru,ke',
        'mode'   : 'json',
        'APIID'  : 'c9c34424290410c28e26e9f89cb96e41'
    });
    
    var post_options = {
        host   : 'api.openweathermap.org',
        path   : '/data/2.5/forecast',
        method : 'GET',
        headers: {
            'Content-Type' : 'application/json',
            'access-control-allow-credentials': true,
            'access-control-allow-origin': '*',
            'access-control-allow-methods': 'GET, POST'
        },
        APIID: 'e6eb729dd2f39ad20344a39eda1d5d78'
    };
    
    var post_req = https.request(post_options, function(res) {

        res.on('data', function (chunk) {
            var jsObject   = JSON.parse(chunk);
            console.log(jsObject);
        });

        res.on('end', () => {
            console.log(JSON.parse(data).explanation);
        });

    }).on("error", (err) => {
        console.log("Error: " + err.message);
    });

    // Add post parameters to the http request
    post_req.write(post_data);
    post_req.end();
    console.log(post_req);
}

// const request = require("request")
// exports.forecast = function() {
//     request.get({url: 'http://api.openweathermap.org/data/2.5/forecast', 
//         qs: {
//             'q'     : 'Nakuru,ke',
//             'mode'   : 'json',
//             'APIID'  : 'e6eb729dd2f39ad20344a39eda1d5d78'
//         }
//     },
//     function(err, response, body) {
//         console.log(err, body);
//     });
// }