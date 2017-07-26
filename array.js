// console.log("in arrays");

// var pokemon = "charmander";

// var array = [42, "string", null, "car", {}, pokemon];

// console.log(array[5]);

// array[33] = "apple";
// console.log(array.length);

// // console.log(array[35]);

// console.log(array.indexOf("car"));

// // Array Methods
	
// array.push("cat"); 		//adds to end of array
// console.log(array);  

// array.pop();			//removes last value in array
// console.log(array);

// array.unshift("zoe is cool");  //adds to beginning of array
// console.log(array);

// array.shift();			//removes the first index in array
// console.log(array);

// var newString = array.join("I");  
// console.log(newString);

// array = newString.split("I");
// console.log(array);

// var sentence = "http://www.meetup.com/";
// console.log(sentence.split("/"));  //splits the string on that character
// console.log(sentence.split(""));  //splits string on space between characters

// var newArray = ["dog", "cat", "pig", "hippo"];
// var numberArray = [3, 6, 92, 55, 8];

// console.log(newArray.reverse()); //reverses the order of the array

// console.log(newArray.sort());  //sorts by alphabetical order
// console.log(numberArray.sort()); //sorts by numerical order on the first digit

// console.log(numberArray.sort(function(first, second){return first - second;}));


// console.log(newArray);
// var result = newArray.slice(1, 3);  //starts a new index with starting and stopping index values; 
// 	//first parameter defines the index it starts at, 2nd parameter defines the index it ends before
// console.log(result);

// console.log(numberArray);
// var result = numberArray.splice(3, 1); //first number is the starting index number; 2nd number 
// 	//shows how many indexes to remove
// console.log(result);
// console.log(numberArray);

// console.log(numberArray[0]);



// FOR LOOPS

var newArray = ["dog", "cat", "pig", "hippo"];

for(var i = 0;i < newArray.length; i++) {
	debugger;
	console.log("I'm at index " + i);
	console.log(newArray[i]);
}
//var i = 0 is the loop initializer; i<newArray.length is the
		//condition; i++ is the iterator
























