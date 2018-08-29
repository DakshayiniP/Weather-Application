const geocode = require('./geocode/geocode.js');
const weather = require('./weather/weather.js');
const yargs = require('yargs');

const args = yargs
.options({
  address: {
    demand: true,
    alias: 'address',
    describe: 'adress for which weather need to be find',
    string: true
  }
})
.help()
.argv;


geocode.geocodeAddress(args.address , (errorMessage, results) => {
  if(errorMessage){
    console.log(errorMessage);
  }
  else {
    console.log(results.address);
    weather.getWeather(results.latitude,results.longitute, (errMsg,temperature) => {

      if(errMsg){

        console.log(errMsg);
      }
      else {

        console.log(`temperature in C: ${temperature}`);
      }
    });

  }
});
