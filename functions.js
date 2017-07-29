console.log("in functions.js");

console.log(cutUpInput);
var outputNumber = cutUpInput(5);
console.log(outputNumber);

// Example of "Single Responsibility Principle"

function nuggetFactory(animalInput) {
	// chickens are cut up
	cutUpInput(animalInput)
	// chickens are separated into chunks
	// take chunks and fry them
	// package the nuggets
}


function cutUpInput (input) {
	var output = input * 20;
	return output;
}

// Function Declarations

var summation;
var constant = 40;
function doesAddition (numberOne, numberTwo) {
	summation = numberOne + numberTwo + constant;
	
}

doesAddition(2, 3);

console.log(summation);
// passed through variable declarations as well as a hard-coded variable
	//2 is used for numberOne and 3 is used for numberTwo - these can change
	//40 is the constant and will not change.

var additionAction = function (first, second) {
	return first + second;
}

console.log(additionAction(4, 9));

