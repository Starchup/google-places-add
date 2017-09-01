var GooglePlaces = require('node-googleplaces');

var place = {
  key : process.env.GOOGLE_API_KEY,
  lat : 30.417652,
  lng : -91.180473,
  acc : 50,
  name : 'Cypress Hall',
  address : "Cypress Hall, Baton Rouge, LA, 70808",
  type : 'school',
  phone : "",
  website : 'http://www.google.com.au/',
  lang : 'en-US'
 }
const places = new GooglePlaces(place.key);

const params = {
  "location": {
    "lat": place.lat,
    "lng": place.lng
  },
  "accuracy": place.acc,
  "name": place.name,
  "phone_number": place.phone,
  "address": place.address,
  "types": [place.type],
  "website": place.website,
  "language": place.lang
}

places.add(params).then(function(res)
  {
    console.log(res.body);
  });