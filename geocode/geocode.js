const request = require('request');

var geocodeAddress = (address , callback) => {

  var encodedAddress = encodeURIComponent(address);
  request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
    json: true
  },
    (error,response,body) => {
      if (error) {
        callback('Not able to connect to google maps url');

      }
      else if (body.status === 'OK') {
        callback( undefined,{
          address: body.results[0].formatted_address,
          latitude: body.results[0].geometry.location.lat,
          longitute: body.results[0].geometry.location.lng
        });

     }
     else if (body.status === 'ZERO_RESULTS') {
       callback('Inavalid address');
       }
    });
}

module.exports.geocodeAddress  = geocodeAddress;
