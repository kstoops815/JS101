// console.log("linked");

// 1. How many hours are in a year
var hoursInDay = 24;
var daysInYear = 365;
var hoursInYear = daysInYear * hoursInDay;
var yearsInDecade = 10;

// console.log(hoursInYear);

// 2. How many minutes are in a decade

var minutesInHour = 60;
var minutesInDecade = minutesInHour * hoursInDay * daysInYear * yearsInDecade;
// console.log(minutesInDecade);


// 3. How many seconds old they are

var myAge = 39;
var secondsInMinute = 60;
var secondsInYear = (hoursInYear * minutesInHour * secondsInMinute);
var secondsInAge = (myAge * secondsInYear);
// console.log(secondsInAge);


// 4. If they are older than some arbitrary number, console "I'm old", else "I'm young"
// if (secondsInAge > 4500022205) {
// 	console.log("I'm old");
// } else {
// 	console.log("I'm young");
// }