var express = require('express')
var app = express()
var request = require('request');
var bodyParser = require('body-parser')


app.use(express.static('public'));

app.post('/getWeather', function (req, res) {
  var zipcode = req.body;
  console.log(zipcode);
  request('http://api.openweathermap.org/data/2.5/weather?zip=' + zipcode + ',us&units=imperial&appid=eee7a2ab44a813468869618fa17f7c8e', function (error, response, body)
  {
    if (!error && response.statusCode == 200) {
      console.log(body);
      res.send(body);
    } else {
      console.warn(error);
    }
    });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
