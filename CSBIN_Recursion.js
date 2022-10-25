// Type JavaScript here and click "Run Code" or press Ctrl + s
console.log('Hello, world!');


// Challenge 1
function countdown(n) {
	// log n
  console.log(n);
  // create break case
  if( n === 2) {
    return console.log(n - 1);
  }
  return countdown(n-1);
};

// To check if you've completed it, uncomment these console.logs!
// countdown(5);
// countdown(10);


// Challenge 2
function sum(array, index = 0) {
	// create a base case
  if ( index === array.length - 1) {
    // return last element of array
    return array[array.length - 1];
  }
  // sum each element with return
  return array[index] + sum(array, index + 1);
}

// uncomment these to check your work
// console.log(sum([1,1,1])); // -> returns 3
// console.log(sum([1,2,3,4,5,6])); // -> returns 21


// Challenge 3
function palindrome(string) {
	// Use Regex to sanitize input string for testcases.
  string = string.replace(/\W/ig, '').toLowerCase();                
  //Base case 1: If string's length is less than or equal to 1, return true
  if(string.length <= 1) {
    return true;
  }
  
  //Base case 2: If the first and last characters of the string don't match up, return false
  if(string[0] !== string[string.length - 1]) {
    return false;
  }
  
  //Recursive case: call palindrome with sliced version of the string 
  return palindrome(string.slice(1,-1))
}

// console.log(palindrome("Anne, I vote more cars race Rome-to-Vienna")); //-> true
// console.log(palindrome("llama mall")); //-> true
// console.log(palindrome("jmoney")); //-> false


// Challenge 4

function isPrime(num, testNum = num - 1) {
	//Take care of all negative numbers.
  if(num < 2) return false;
  //Break case 1: If testNum is 1 or num is 2, num is prime.
  if(testNum === 1 || num === 2) return true;
  //break case 2: Ff mod of num and testNum equals 0, num isn't prime
  if(num % testNum === 0) return false;
  //Recursive call: invoke isPrime, but decrement testNum by 1
  return isPrime(num, testNum - 1);

}

// console.log(isPrime(1)); //-> false
// console.log(isPrime(2)); //-> true
// console.log(isPrime(3)); //-> true
// console.log(isPrime(4)); //-> false


//Challenge 5
function pathFinder(obj, arr, index = 0) {
  // recursive case: iterate through arr and increment index
  if(typeof obj[arr[index]] === "object"){
    return pathFinder(obj[arr[index]], arr, index + 1);
  }
  // break case: if current index of arr key is a string, return that string
  else if(typeof obj[arr[index]] === "string"){
    return obj[arr[index]];
  }
}

// const obj1 = { first: { second: { third: "finish" } }, second: { third: "wrong" } };
// const arr1 = ["first", "second", "third"];
// console.log(pathFinder(obj1, arr1));   //-> "finish"


//Challenge 6
function flattenRecursively(arr, newArr = [], index = 0) {
  //Break case: if we've emptied arr, return newArray
  if(arr[index] === undefined) {
    return newArr;
  }
  //Recursive case 1: if array element is an array, begin flattenning process a new
  if(Array.isArray(arr[index])) {
    return flattenRecursively(arr[index], newArr, 0)
  } 
	//Recursive case 2: if array element isn't an array, push to element to newArray and increment index by 1
  else{
    newArr.push(arr[index]);
    return flattenRecursively(arr, newArr, index + 1)
  }
}

// console.log(flattenRecursively([1, [2, 3, [4]]])); //-> [1, 2, 3, 4]
// console.log(flattenRecursively([1, {}, [3, [[4]]]])); //-> [1, {}, 3, 4]


//Challenge 7
function findInOrderedSet(arr, target) {
  // initialize a label for the last element of array
  const lastIndex = arr.length - 1;
	// check set is ordered
  if (arr[0] < arr[lastIndex]) {
    // break case 1: If target is reached return true
    if (arr[0] === target || arr[lastIndex] === target) {
    	return true;
    }
    // recursive case: return sliced arr, for binary search
    return findInOrderedSet(arr.slice(1, lastIndex), target);
  }
  // break case 2: if arr is empty, return false
  else if (lastIndex === 1 || lastIndex === 0) {
    return false;
  }
    // Break case 3: if array is not in order, return error message
  else {
    return 'Type Error: Array not an ordered Set';
  }
}

// const nums = [1, 4, 6, 7, 9, 17, 45];
// console.log(findInOrderedSet(nums, 4));  //-> true
// console.log(findInOrderedSet(nums, 2));  //-> false


//Challenge 8
function countWaysToReachNthStair1(n, memo = {1:1, 2:2}, arr = []) {
  // if memo has n return n's value
  //arr.push(1)
  if (n in memo) {
    return memo[n];
  }
  // if memo doesn't include n, calculate it's value
  else {
		memo[n] = countWaysToReachNthStair1(n - 1, memo, arr) + countWaysToReachNthStair1(n - 2, memo, arr)
  };
  //console.log(`There are ${arr.length} frame stacks`)
  // return n's value
	return memo[n]; 
}



// This is the unoptimized method
function countWaysToReachNthStair(n, arr = []) {
  // used to counter frame stacks
  //arr.push(1);
// Similiar to the fibonacci seq, we have only two possible routes for this question. For any positive integer, n, we can decrement by either 1 or 2 until we finally reach either 1 or 2. At that point - we can make use of the stack frame to keep track of the routes. 

  if(n === 1) return 1;
  
  if(n === 2) return 2;
  //console.log(`There are ${arr.length} frame stacks`);
  return countWaysToReachNthStair(n - 1, arr) + countWaysToReachNthStair(n - 2, arr)
}

// console.log(countWaysToReachNthStair1(1)) //-> 1 (only one way to climb 1 stair)
// console.log(countWaysToReachNthStair1(2)) //-> 2 ((1, 1), (2))
//console.log(countWaysToReachNthStair1(4)) //-> 5 ((1, 1, 1, 1), (1, 1, 2), (2, 1, 1), (2, 2))


//Challenge 9
function getPermutations(nums, result = []) {
  // break case 1: if nums has length 1 return it's element
	if (nums.length === 1) {
	return nums;
	}
  console.log('nums', nums)
	nums.forEach((el, i) => {
		let remainingNums = nums.slice(0, i).concat(nums.slice(i + 1));
    console.log('remainingNums', remainingNums)
		const remainingNumsPermuted = getPermutations(remainingNums);
    console.log('remainingNumsPermuted',remainingNumsPermuted)
		remainingNumsPermuted.forEach((element, j) => {
			let permutedArray = [el].concat(remainingNumsPermuted[j]);
	result.push(permutedArray);
      console.log('permutedArray',permutedArray)
		})
	})
  console.log('result',result)
  return result;
}


//console.log(getPermutations([1, 2])) //-> [[1, 2], [2, 1]]
console.log(getPermutations([1, 2, 3, 4])) //-> [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]


//Challenge 10
function getRangeBetween(x, y, outputArr = []) {
	//Note: x and y are exclusive
  //Base case: Starting from x, if we reach y, let's return our arr
  if(x === y - 1) {
    return outputArr;
  }
  outputArr.push(x + 1);
  return getRangeBetween(x + 1, y, outputArr)
}

// console.log(getRangeBetween(2, 9)) //-> [3, 4, 5, 6, 7, 8]
// console.log(getRangeBetween(-5, 5)) //-> [-4, -3, -2, 1, 0, 1, 2, 3, 4]

