var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})


// var request = require('request');
// let userZip = document.getElementById('id').value;
// request('http://api.openweathermap.org/data/2.5/weather?zip=' + userZip + 'us&appid=eee7a2ab44a813468869618fa17f7c8e', function (error, response, body) {
//   if (!error && response.statusCode == 200) {
//     console.log(body) // Show the HTML for the Google homepage.
//   }
// })
