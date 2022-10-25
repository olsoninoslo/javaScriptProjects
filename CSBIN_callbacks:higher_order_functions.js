// csbin callback and higher order functions

// Type JavaScript here and click "Run Code" or press Ctrl + s
console.log('Hello, world!');


// Challenge 1
function addTwo(num) {
  // Take a num as input and add two 
  return num+ 2;
}

// To check if you've completed it, uncomment these console.logs!
// console.log(addTwo(3));
// console.log(addTwo(10));


// Challenge 2
function addS(word) {
  //take a word as input and add s
  return word+'s';
}

// uncomment these to check your work
// console.log(addS('pizza'));
// console.log(addS('bagel'));


// Challenge 3
function map(array, callback) {
	// initialize a new array
  const newArray = [];
	// iterate through the input array
  array.forEach((el) => {
    // push the callback return to newArr
    newArray.push(callback(el));
  });
  return newArray;
}

// console.log(map([1, 2, 3], addTwo));


// Challenge 4
function forEach(array, callback) {
	// iterate through the array and input each element into the callback
  for (let i = 0; i < array.length; i++) {
    callback(array[i]);
  } 
}


// see for yourself if your forEach works!
// let alphabet = '';
// const letters = ['a', 'b', 'c', 'd'];
// forEach(letters, function(char) {
//   alphabet += char;
// });
// console.log(alphabet)

// Challenge 5
function mapWith(array, callback) {
  // initialize a new array
  const newArray = [];
  // push the return of forEach to the newArray using an anonymous function
	forEach(array, el => {
    newArray.push(callback(el));
  });
  return newArray;
};

// console.log(mapWith([1, 2, 3], addTwo));


// Challenge 6
function reduce(array, callback, initial){
  // creating an accumulator
  let acc = initial;
	// iterate throuhg array
  array.forEach(function(el) {
    // updating acc with the return for callback
    acc = callback(acc, el);
  });
  // returning the final acc
  return acc;
};

const nums1 = [4, 1, 3];
const add = function(a, b) { return a + b; }
const multiply = (a,b) => {return a*b; }
reduce(nums1, add, 0);   //-> 8

// console.log(reduce(nums1, add, 0)) // should log: 6

// console.log(reduce(nums1, multiply, 1)) // should log: 



// Challenge 7
function intersection(arrays) {
	// iterate throuhg with reduce
	return arrays.reduce((current, acc) => 
  // filtering out the elements of current that don't match the elements of acc
    				current.filter((el) => acc.includes(el)));
};

// console.log(intersection([[5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]]));
//should log: [5, 15]


// Challenge 8
function union(arrays) {
  // iterates through arrays
	return arrays.reduce((current, acc) => 
    // reduce to an array of a new set that concats all equal values
  	[...new Set([...current,...acc])]);
};

// console.log(union([[5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]]));
// should log: [5, 10, 15, 88, 1, 7, 100]


// Challenge 9
function objOfMatches(array1, array2, callback) {
  // initialize an object
  const obj = {};
  // iterate through array1 with forEach, using element and index
  array1.forEach((el, index) => {
    // if callback returned from el is equal to the same index of array2
    if (callback(el) === array2[index]){
      // place el in object with value with the matching index in array2
      obj[el] = array2[index];
    }
  });
  return obj;
};


// console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function(str) { return str.toUpperCase(); }));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }


// Challenge 10
function multiMap(arrVals, arrCallbacks) {
	// initialize a new object
  const obj = {};
  // iterate through the arrVals
  arrVals.forEach((el) => {
    // initialize an acc array
    let acc = [];
    // iterate through arrCallbacks
    arrCallbacks.forEach((cb) => {
      // push the return of each cb to acc
      acc.push(cb(el));
    });
    // populate obj with el as the key its acc array as the value
    obj[el] = acc;
  });
  return obj;
};

// console.log(multiMap(['catfood', 'glue', 'beer'], [function(str) { return str.toUpperCase(); }, function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function(str) { return str + str; }]));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }


// Challenge 11
function objectFilter(obj, callback) {
	// initialize a new object
  const newObj = {};
  // make an array of the objects keys to iterate through
  const arr = Object.keys(obj);
  // iterate throuhg arr
  arr.forEach((el) => {
    // if the callback return from input el equal the el's value
    if (callback(el)=== obj[el]){
      // place the el in newObj as a key, and callback return as value
      newObj[el] = callback(el);
    }
  });
  return newObj;
}

const cities = {
London: 'LONDON',
LA: 'Los Angeles',
Paris: 'PARIS',
};
// console.log(objectFilter(cities, city => city.toUpperCase())) // Should log { London: 'LONDON', Paris: 'PARIS'}


// Challenge 12
function majority(array, callback) {
  // create a true array and a false array
  const arrTrue = [];
	const arrFalse = [];
  // iterate throguh array
  array.forEach((el) => {
    // if return from callbakc is true
    if (callback(el)===true){
      // push element to true array
      arrTrue.push(el);
    }
    else {
      arrFalse.push(el);
    }
  });
  // if true array is longer, return true
  if (arrTrue.length > arrFalse.length) return true;
  // else return false
  return false;

}

// /*** Uncomment these to check your work! ***/
// function isOdd(num) { return num % 2 === 1; };
// console.log(majority([1, 2, 3, 4, 5], isOdd)); // should log: true
// console.log(majority([2, 3, 4, 5], isOdd)); // should log: false


// Challenge 13
function prioritize(array, callback) {
	// intialize a true array and a false array
  const arrTrue = [];
  const arrFalse = [];
  // iterate through array
  array.forEach((el) => {
    // if callback returns true, push to true array
    if (callback(el) === true) {
      arrTrue.push(el);
    }
    else{
      arrFalse.push(el);
    }
  });
  // return concatinated arr with true returns first
  return [...arrTrue, ...arrFalse];
};

// /*** Uncomment these to check your work! ***/
// function startsWithS(str) { return str[0] === 's' || str[0] === 'S'; };
// console.log(prioritize(['curb', 'rickandmorty', 'seinfeld', 'sunny', 'friends'], startsWithS)); // should log:['seinfeld', 'sunny', 'curb', 'rickandmorty', 'friends']


// Challenge 14
function countBy(array, callback) {
	// intialize and object
  const obj = {};
  array.forEach((el) => {
    // check it obj has the the current return from callback
    if (!obj[callback(el)]){
      // if it doesn't add it and set it's value to 1
      obj[callback(el)] = 1;
    }
    else {
      // if it does, increase the keys value by 1
      obj[callback(el)] += 1;
    }
  });
  return obj;
};

// /*** Uncomment these to check your work! ***/
// console.log(countBy([1, 2, 3, 4, 5], function(num) {
// if (num % 2 === 0) return 'even';
// else return 'odd';
// })); // should log: { odd: 3, even: 2 }


// Challenge 15
function groupBy(array, callback) {
	// initialize an object
  const obj = {};
  array.forEach((el) => {
    // check is the cb return is in obj
    if (!obj[callback(el)]) {
      // if it isn't add it with it's element array
      obj[callback(el)] = [el];
    }
    else {
      // if it does contain the return, push el to the value array
      obj[callback(el)].push(el);
    }
  });
  return obj;
};

// /*** Uncomment these to check your work! ***/
// const decimals = [1.3, 2.1, 2.4];
// const floored = function(num) { return Math.floor(num); };
// console.log(groupBy(decimals, floored)); // should log: { 1: [1.3], 2: [2.1, 2.4] }


// Challenge 16
function goodKeys(obj, callback) {
  // create an array of obj's values
  const valueArr = Object.values(obj);
  // create an arr of obj's keys
  const keyArr = Object.keys(obj);
  // create an acc array
  const newArr = [];
  // iterate through valueArr
 	valueArr.forEach((el, index) => {
    // if the callback of el return true
    if (callback(el)===true){
      // push el's key to newArr
      newArr.push(keyArr[index]);
    }
  });
  return newArr;
};

// /*** Uncomment these to check your work! ***/
// const sunny = { mac: 'priest', dennis: 'calculating', charlie: 'birdlaw', dee: 'bird', frank: 'warthog' };
// const startsWithBird = function(str) { return str.slice(0, 4).toLowerCase() === 'bird'; };
// console.log(goodKeys(sunny, startsWithBird)); // should log: ['charlie', 'dee']


// Challenge 17
function commutative(func1, func2, value) {;
  // intialize passed in values
  const val1 = func1(value);
  const val2 = func2(value);
	// test cummutativity between func1 and func2                                 
  if (func1(val2) === func2(val1)) {
   return true;
  }
	return false;
};

// /*** Uncomment these to check your work! ***/
// const multBy3 = n => n * 3;
// const divBy4 = n => n / 4;
// const subtract5 = n => n - 5;
// console.log(commutative(multBy3, divBy4, 11)); // should log: true
// console.log(commutative(multBy3, subtract5, 10)); // should log: false
// console.log(commutative(divBy4, subtract5, 48)); // should log: false


// Challenge 18
function objFilter(obj, callback) {
	// intitalize a new obj
  const newObj = {};
  // create an array of obj keys to iterate through
  const objKeys = Object.keys(obj);
  // iterate through the objKeys
  objKeys.forEach((el) => {
    // if the callback's return from el is equal to el's value
    if (callback(el)===obj[el]){
      // populate newObj with el as key paired with the callbacks return
      newObj[el] = callback(el);
    }
  });
  return newObj;
}

// /*** Uncomment these to check your work! ***/
// const startingObj = {};
// startingObj[6] = 3;
// startingObj[2] = 1;
// startingObj[12] = 4;
// const half = n => n / 2;
// console.log(objFilter(startingObj, half)); // should log: { 2: 1, 6: 3 }


// Challenge 19
function rating(arrOfFuncs, value) {
  // initialize a new true arr
  const arrTrue = [];
  // map arrOfFuncs to new array
	arrOfFuncs.forEach((el) => {
		// if the callback returns true
    if (el(value) === true){
      // push an element to arrTrue
      arrTrue.push(true);
    }
  });
  // return the length of arrTrue divided by the length of arrOfFuncs time 100
  return ((arrTrue.length)/(arrOfFuncs.length))*100;
}

// /*** Uncomment these to check your work! ***/
// const isEven = n => n % 2 === 0;
// const greaterThanFour = n => n > 4;
// const isSquare = n => Math.sqrt(n) % 1 === 0;
// const hasSix = n => n.toString().includes('6');
// const checks = [isEven, greaterThanFour, isSquare, hasSix];
// console.log(rating(checks, 64)); // should log: 100
// console.log(rating(checks, 66)); // should log: 75


// Challenge 20
function pipe(arrOfFuncs, value) {
  // create a temp variable equal to value
  let tmp = value;
	// iterate through arrOfFuncs
  arrOfFuncs.forEach((el) => {
    // update tmp variable
    tmp = el(tmp);
  })
  return tmp;
};


// /*** Uncomment these to check your work! ***/
// const capitalize = str => str.toUpperCase();
// const addLowerCase = str => str + str.toLowerCase();
// const repeat = str => str + str;
// const capAddlowRepeat = [capitalize, addLowerCase, repeat];
// console.log(pipe(capAddlowRepeat, 'cat')); // should log: 'CATcatCATcat'


// Challenge 21
function highestFunc(objOfFuncs, subject) {
	// create an array of funcs
  const funcArray = Object.values(objOfFuncs);
  // create an array of keys
  const keyArray = Object.keys(objOfFuncs);
  // create a holder variable and it's index
  let acc = funcArray[0](subject);
  let place = 0;
  // ireate through funcArray
  funcArray.forEach((el, index) =>{
    // change the value of acc and index if the a larger value exists
    if (el(subject) > acc){
      acc = el(subject);
      place = index;
    }
  });
  return keyArray[place];
};

// /*** Uncomment these to check your work! ***/
const groupOfFuncs = {};
// groupOfFuncs.double = n => n * 2;
// groupOfFuncs.addTen = n => n + 10;
// groupOfFuncs.inverse = n => n * -1;
// console.log(highestFunc(groupOfFuncs, 5)); // should log: 'addTen'
// console.log(highestFunc(groupOfFuncs, 11)); // should log: 'double'
// console.log(highestFunc(groupOfFuncs, -20)); // should log: 'inverse'


// Challenge 22
function combineOperations(startVal, arrOfFuncs) {
	// create a tmp variable 
  let tmp = startVal;
  // iterate through arrOfFuncs
  arrOfFuncs.forEach((el) => {
    // update tmp
    tmp = el(tmp);
  })
  return tmp;
}

function add100(num) {
  return num + 100;
}

function divByFive(num) {
  return num / 5;
}

function multiplyByThree(num) {
  return num * 3;
}

function multiplyFive(num) {
  return num*5;
}

function addTen(num) {
  return num + 10;
}

// /*** Uncomment these to check your work! ***/
// console.log(combineOperations(0, [add100, divByFive, multiplyByThree])); // Should output 60 -->
// console.log(combineOperations(0, [divByFive, multiplyFive, addTen])); // Should output 10


// Challenge 23
function myFunc(array, callback) {
  // create an holder variable
  let place;
  // iterate through array
  array.forEach((el, index) => {
    // check if callback returns true
    if (callback(el) === true){
      // push index to acc
      place = index;
    }
  });
  // if there are no true returns, return negative one
  if (place === undefined) {
    return -1;
  }
  return place;
};

const numbers = [2, 3, 6, 64, 10, 8, 12];
const evens = [2, 4, 6, 8, 10, 12, 64];

function isOdd(num) {
  return (num % 2 !== 0);
}

// /*** Uncomment these to check your work! ***/
// console.log(myFunc(numbers, isOdd)); // Output should be 1
// console.log(myFunc(evens, isOdd)); // Output should be -1


// Challenge 24
function myForEach(array, callback) {
	// iterate through array
  for (let i = 0; i < array.length; i++){
    // input each element of array into callback
    callback(array[i]);
  }
}

let sum = 0;

function addToSum(num) {
  sum += num;
}

// /*** Uncomment these to check your work! ***/
// const nums2 = [1, 2, 3];
// myForEach(nums2, addToSum);
// console.log(sum); // Should output 6