let request = require('request');

let apiKey = '***********************************';
let city = 'portland';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${'Portland'}&units=imperial&appid=${'a3ea64870e39766f2692cb3145676252'}`

request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    let weather = JSON.parse(body)
    let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
    console.log(message);
  }
});
