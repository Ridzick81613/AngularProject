var express = require('express')
var app = express()
var request = require('request');


app.use(express.static('public'));

app.get('/getWeather', function (req, res) {

    request('http://api.openweathermap.org/data/2.5/forecast?lat=35&lon=139&appid=eee7a2ab44a813468869618fa17f7c8e', function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body);
      } else {
        console.warn(error);
      }
});
app.post('/getWeather', function(req, res) {
    var data = req.body

    res.send(data);
});})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
