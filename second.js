console.log("I'm in second.js");

var perry = "penguin";
var nellie = "owl";

console.log("Perry is a " + perry);

var quote = "when you don't create things, you become defined by your tastes rather than your ability. Your tastes only narrow and exclude people. So create!";

var numberOfCharacters = quote.length;
console.log("length of quote: " + numberOfCharacters);

// Built in Methods - these are functions and need () with something inside to execute
// .indexOf()
// .charAt()
// .replace()

//First Quote
console.log(quote.indexOf("things")); //will give the index of the beginning of the string(first encounter)

console.log(quote.charAt(50)); //will give the character at the specified index

var quote = quote.replace(/things/g, "robots");

document.getElementById("quote").innerHTML = quote;


//Second Quote
var element= document.getElementById("secondQuote"); //reading from HTML
var jsString = element.innerHTML;
console.log(jsString);
