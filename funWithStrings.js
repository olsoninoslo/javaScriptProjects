
// Prove two strings are an anagrams?

function anagramProver(str1, str2){
  // If the two are different lengths, then it is clearly not an anagram
    if(str1.length !== str2.length) {
        return false;
     };
  // If they are the same lengths we test whether the can be made to be the same string
  // 1) make all letters the same case
  // 2) split the strings up into an array of all the letters
  // 3) sort the array of letters in a consistent manner
  // 4) join the sorted arrays
  // 5) set each joined array to one another and get it's truthy value adn return true or false

  	const bool = str1.toLowerCase().split("").sort().join("") === str2.toLowerCase().split("").sort().join("");
  
  return bool;
}
const string1 = 'a gentleman';
const string2 = 'elegant man';
console.log(anagramProver(string1, string2));


// Find the number of numerical digits in a string?

function getNumberOfDigits(str) {
// We use RegExp to replace any non numerical char with an empty string and then find the length

  return str.replace(/[^0-9]/g, '').length
}

// NOTE:
// The forward slashes / / mark the beginning and end of the regular expression
// The part between the square brackets [] is called a character class
// The caret " ^ " symbol means "not the following", in other words we're matching anything but a range of digits from "0-9"
// g in the RegExp is a global variable



// Reverse a string


const string1 = 'This is a string to be reversed';

const reverseString = (str) => {
	// Turn the string into an array with the spread operator
	const arrStr = [...str];
	// Initalize a new array that is to be returned
	const reversedStr = [];
		// Iterate through that array, beginning with the last element and decrementing to sero
	for (let i = arrStr.length - 1; i >= 0; i--) {
		// push each element of arrStr to reversedStr
		reversedStr.push(arrStr[i]);
	};
  // Return the reversed string array joined together by empty strings
	return reversedStr.join('');
}

// Log the output to make sure the function is working properly

// console.log(reverseString(string1)); // should log => 'desrever eb ot gnirts a si sihT'
