const request = require('request');

var forecastAPIKEY = 'f3a3ec205bcc1f4843375c1163f08838';
// var lat =  30.43149129999999;
// var lng =  -97.7585605;

var getWeather = (lat,lng,callback) => {
  debugger;
request({
  url: `https://api.darksky.net/forecast/${forecastAPIKEY}/${lat},${lng}`,
  json: true

},(error,response,body)=>{

      if (error) {
        callback('Not able to connect to forecast.io');

      }
      else if (response.statusCode === 400) {
        callback('400 Bad Request');
      }
      else if (response.statusCode === 200) {
        var temp = body.currently.temperature;
        var tempInCel = (temp - 32)*0.5556;
        callback(undefined,tempInCel);

      }
});

}

module.exports.getWeather = getWeather;
