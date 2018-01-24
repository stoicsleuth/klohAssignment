var request = require('request');
exports.showEvents = (req, res) => {


    var myJSONObject = {

        "location": {

            "lat": 12.926031,

            "lon": 77.676246

        }

    };
    request({
        url: "https://api.kloh.in/kloh/external/v1/activity/list",
        method: "POST",
        json: true,
        body: myJSONObject
    }, function(error, response, body) {
        let results = response.body.response.results;
        //console.log(Array.isArray(result));
        res.render('event', {
            title: 'Events near Bangalore',
            results
        });
    });



};

exports.showEvent = (req, res) => {
    let id = req.params.id;
    request({
            url: `https://api.kloh.in/kloh/external/v1/activity/${id}`,
            method: "GET",
            json: true
        },
        function(error, response, body) {
            let event = response.body.response;
            res.render('eventLanding', {
                title: `Join ${event.title}`,
                event
            });


        });

}