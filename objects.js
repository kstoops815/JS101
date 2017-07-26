/// HOW TO DEFINE AN OBJECT

var x = "humidity";

var weather = {
	currentTemp: 82,
	isRaining: false,
	humidity: "too much",
	'is-sunny': true

};
 //key is whatever comes before the colon; value is what comes after

 console.log(weather);
//Assigning a property to an object
 weather.location = "Nashville"; //dot notation, generally more used
weather['zipCode'] = 37212; //bracket notation; is expecting a string value
 console.log(weather);

 console.log(weather.isRaining);
 console.log(weather['is-sunny']);

 console.log("humidity", weather[x]);
 console.log(weather.x); //does not work

 