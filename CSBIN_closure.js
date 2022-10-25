// Challenge: Memoization

// Memoization is a function that takes in a function
// and either caches it's results or returns the cached
// result. This can greatly optimize client side functionality for an API

function memoization(func) {

	// create a cache within a closed scope
	let cache = {};

	// Initialize a closed scope
	function inner (...args) {
	// using conditions to control the process flow
	// If there is an input in the cache, return the cached result
	if (cache[input]) {
		return cache[input];
		}
	// put the result in the cache and return the results
	// of calling that function
	else {
		cache[input] = func(input);
		return cache[input];
		}
	}
	return inner;
}



//  Challenge: once 

//  This is a function that take in a callback and only allows it to 
//  be called upon once


function once(callback) {
  // A bool tracks if the callback has been called
	let hasBeenCalled = false;
  // a variable will hold on to the result of the
  // first time the callback was called
  let cachedResult;
  function oncifiedCallback(...args) {
    // Using a conditional the control if 
    // we change the cached result and hasBeenCalled bool
    if(!hasBeenCalled) {
      // The first time we call the callback,
      // we change the the varaibles
      cachedResult = callback(...args)
      hasBeenCalled = true
    }
    // If it is a second, third, etc time, we simply
    // return the cached result
    return cachedResult;
  }
  // Return the inner function, completing the closure
  return oncifiedCallback;
}

const addByTwoOnce = once(function(num) {
  return num + 2;
});
// UNCOMMENT THESE TO TEST YOUR WORK!
// console.log(addByTwoOnce(5));  //should log 7
// console.log(addByTwoOnce(10));  //should log 7
// console.log(addByTwoOnce(9001));  //should log 7


//  Challenge: after

//  This is a function that counts how many times a callback is called and
//  and returns it's output of the callback after a specific number of times

function after(timesCalled, callback) {
  // counts how many times the callback is called
    // it starts at one to account for the fact that computers
    // default to counting from zero
  let counter = 1; 

  // Initial callback output: result
    // Because we don't know the data type we
    // won't initialize it to any specific value
  let result; 

  // closure requires us to have a function that is output from after
    // Using the rest operator => (...)
  function outputFunc(...args) {
    // If the input variable timesCalled is less than or equal to
    // our counter variable, we know that the function
    // has been invoked enough, and we return the result
    if (counter >= timesCalled) {
      counter++
    	return callback(...args) // returning the function value with the
      // the spread operator => (...)
      }
    // If timesCalled is less than counter, we add 1 to counter
    else if (timesCalled > counter) {
      counter++
      return result //This will be undefined
    }
  }; // end of output
  
  return outputFunc; // output our function "output"
}


const called = function(string) { return('hello ' + string); };
const afterCalled = after(3, called);

// UNCOMMENT THESE LINES TO TEST YOUR WORK
// console.log(afterCalled('world')); // -> undefined is printed
// console.log(afterCalled('world')); // -> undefined is printed
// console.log(afterCalled('world')); // -> 'hello world' is printed




// Challenge: censor

// censor will return a function that will accept either two strings, or one string. 
//  When two strings are given, the returned function will hold onto the two strings 
//  as a pair, for future use. When one string is given, the returned function will 
//  return the same string, except all instances of a first string (of a saved pair) 
//  will be replaced with the second string (of a saved pair)

function censor() {
  // Initialize an object to hold onto string pairs
  const cache = {}
  // return a function that take two str arguements to initialize a closed scope
  return function(string1, string2) {
    // If there is a secone argeuement
    if (string2) {
      // save both as a key value pair
      cache[string1] = string2;
      // Use a blank return to stop execution
      return;
    }
    // If there is not a second input, itterate through the cache's keys
    Object.keys(cache).forEach(key => {
      // and replace the strings in string1 with cached keys
      string1 = string1.replace(key, cache[key])
      });
    // return the transformed string1
    	return string1;
  }
 }


// // Uncomment these to check your work!
// const changeScene = censor();
// changeScene('dogs', 'cats');
// changeScene('quick', 'slow');
// console.log(changeScene('The quick, brown fox jumps over the lazy dogs.')); // should log: 'The slow, brown fox jumps over the lazy cats.'





// Challenge: dateStamp

// the returned function will accept whatever arguments the
// passed-in function accepts and returns an object with a 
// date key whose value is todays date (not including time)
const dateStamp = (func) => {
  // Initializing a objec to be returned
  const obj = {};
  // The inner function should accept any number of arguments passed
  return function(...args) {
    // new Date().toDateString() returns a human readable date w/o the time
    obj['date'] = new Date().toDateString();
    // using the spread operator again
    obj['output'] = func(...args);
    return obj;
  }
}
// Uncomment these to check your work!
// const stampedMultBy2 = dateStamp(n => n * 2);
// console.log(stampedMultBy2(4)); // should log: { date: (today's date), output: 8 }
// console.log(stampedMultBy2(6)); // should log: { date: (today's date), output: 12 }



// Challenge: hobbyTracker

const hobbyTracker = (hobbies) => {
  // initialize a cache object
  const cache = {};
  // Iterate through the hobbies array and fill the cache with hobbies and initial value of zero
  hobbies.forEach((el) => {cache[el] = 0});
  // return function to initialize closed scope
  return function(hobby, hours) {
    // Use a conditional the reset the cache if no arguements are passed
    if (hobby === undefined && hours === undefined){
    hobbies.forEach(el => cache[el] = 0);
    return "tracker has been reset!";
    }
    // If arguements are passed, update the cache
    else {
      cache[hobby] += hours;
      // return the cache object
      return cache;
    }
  }
}

// Uncomment the code below to check your code:
// const updateHobbies = hobbyTracker(['yoga', 'baking', 'piano']);
// updateHobbies('yoga', 2);
// updateHobbies('baking', 4);
// updateHobbies('yoga', 1);
// console.log(updateHobbies('piano', 2)); // --> { yoga: 3, baking: 4, piano: 2 }
// console.log(updateHobbies()); // --> 'tracker has been reset!'
// console.log(updateHobbies('baking', 1)); // --> { yoga: 0, baking: 1, piano: 0}
// console.log(updateHobbies('baking', 1)); // --> { yoga: 0, baking: 2, piano: 0}



//Challenge: defineFirstArg


const defineFirstArg = (passedInFunction, arg) => {
  // return a function to initialize a closed scope with spread args (...args)
  return function(...args) {
    // return passInFunction with the first arguement being 'arg' and the rest being '...args'
    return passedInFunction(arg,...args);
  }
}

// Uncomment these to check your work!
// const subtract = function(big, small) {return big - small; };
// const subFrom20 = defineFirstArg(subtract, 20);
// console.log(subFrom20(5)); // should log: 15



// Challenge: cycleIterator


//  Declare a function called cycleIterator that accepts an array
//  When first invoked, the returned function will return the first element 
//  of the array. When invoked a second time, the returned function will 
//  return the second element of the array, and so forth.

const cycleIterator = (array) => {
  // initialize a counter variable to cycle through the array
  let index = 0;
  // return function that doesn't accept any arguements to initialize a closed scope
  return function() {
    // label the current element of the array to be returned
    const result = array[index];
    // increment the index
    index++;
    // if the index is greater than/ equal to the array length, reset the index to zero
   	if (index >= array.length) index = 0;
    return result;
    }
	}

// Uncomment these to check your work!
// const threeDayWeekend = ['Fri', 'Sat', 'Sun'];
// const getDay = cycleIterator(threeDayWeekend);
// console.log(getDay()); // should log: 'Fri'
// console.log(getDay()); // should log: 'Sat'
// console.log(getDay()); // should log: 'Sun'
// console.log(getDay()); // should log: 'Fri'
// console.log(getDay()); // should log: 'Sat'
// console.log(getDay()); // should log: 'Sun


// Challenge: saveOutput

//  This function (that will accept one argument), and a string (that will act as a password). 
//  aveOutput will then return a function that behaves exactly like the passed-in function, 
//  except for when the password string is passed in as an argument. When this happens, 
//  the returned function will return an object with all previously passed-in arguments as keys, 
//  and the corresponding outputs as values

// Declare a function savedOutput that takes tow arguements: a function and a password
const saveOutput = (callback, password) => {
  // Initialize an object to cache the input/ouputs of the callback
  const cache = {};
  // Initialize return anonymous function
  return function(arg) {
    // If password is not an arguement
    if (arg !== password) {
      // cache the arguement as a key and it's callback return as a value
      cache[arg] = callback(arg);
      // return the callbacks return
      return callback(arg);
    }
    // If the arguement is the password
    else if (arg === password) {
      // return the cache
      return cache;
    }
  }
}


//Uncomment these to check your work!
const multiplyBy2 = function(num) { return num * 2; };
const multBy2AndLog = saveOutput(multiplyBy2, 'boo');
console.log(multBy2AndLog(2)); // should log: 4
console.log(multBy2AndLog(9)); // should log: 18
console.log(multBy2AndLog('boo')); // should log: { 2: 4, 9: 18 }
console.log(multBy2AndLog(112)); // should log: 18
console.log(multBy2AndLog('boo'));