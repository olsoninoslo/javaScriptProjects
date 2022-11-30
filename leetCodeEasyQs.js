/*
You are given an array of unique integers salary where salary[i] is the salary of the ith employee.
Return the average salary of employees excluding the minimum and maximum salary. 
Answers within 10-5 of the actual answer will be accepted.


Example 1:

Input: salary = [4000,3000,1000,2000]
Output: 2500.00000
Explanation: Minimum salary and maximum salary are 1000 and 4000 respectively.
Average salary excluding minimum and maximum salary is (2000+3000) / 2 = 2500

//////////////////

intantial three variable that are max, min and average

iterate throught the salary arr

if element is equal to max or min, skip
else add to average

return average/ (salary.length-2)

*/

var average = function(salary) {
  // initialize necessary varibles
	let sum  = 0;
  let max = -Infinity;
  let min = Infinity;
  // iterate through salary arr
  for (const num of salary) {
    // accumulate the sume of the arr
    sum += num;
    // find min and max as well
    max = Math.max(max, num);
    min = Math.min(min, num);
  }
  // subtract the max and min
  sum -= max + min;
  // teh average minus outliers
  return sum / (salary.length - 2);
};

/////////////////////////////////////////////////////////////////

/*
Given an array of strings words, return the words that can be typed using 
letters of the alphabet on only one row of American keyboard like the 
image below.

In the American keyboard:

the first row consists of the characters "qwertyuiop",
the second row consists of the characters "asdfghjkl", and
the third row consists of the characters "zxcvbnm".

Example 1:

Input: words = ["Hello","Alaska","Dad","Peace"]
Output: ["Alaska","Dad"]
Example 2:

Input: words = ["omk"]
Output: []
Example 3:

Input: words = ["adsdf","sfd"]
Output: ["adsdf","sfd"]
 
Constraints:

1 <= words.length <= 20
1 <= words[i].length <= 100
words[i] consists of English letters (both lowercase and uppercase). 

create hashmap mapping a-z to 1, 2, 3
wordcheck:
for each word of words:
  first_row = word[0]
  for each char of word:
    if row[char] !== first_row:
      continue wordcheck
  push word into result array
return result array
*/


var findWords = function(words) {

  // create a hash map of for each character
    const hashmap = {};
    const strings = ['qwertyuiop1', 'ascdfghjkl2', 'zxcvbnm3']
    for (const string of strings) {
        for (const char of string) {
            hashmap[char] = string.at(-1);
        }
    }
    // initialize an array to return wordst that meet the condtion
  const resultArr = []
    wordcheck:
    // iterate through the words array
    for (const word of words) {

      // find the row to test against
      const row = hashmap[word[0].toLowerCase()]

      // iterate through the characters of the word
      for (const letter of word) {

        // testing if each letter matches the row
        if (hashmap[letter.toLowerCase()] !== row){
          // if you find a letter that is mismatched go to the next word
        continue wordcheck
        }
      }
      // if you don't find a mismatch, push the word to result
      resultArr.push(word)
    }
  return resultArr;
};

const testCase = ["Hello","Alaska","Dad","Peace"]

// console.log(findWords(testCase))

/////////////////////////////////////////////////////////////////
/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', 
determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"
Output: true

Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false

/*
take the input string and put it into an arr

iterate through the array and if the element is one of '(','{','['
  continue iterateing throught the array looking for it's counter part

if you get through the entire array and all paren are pairs return true, else return false
*/


var isValid = function(s) {
  // initialize a stack
  const stack = [];
  // initialize a hashmap
  const hash = { ')': '(', ']':'[', '}':'{', };
  // iterate through the string s
  for (const char of s) {
    // If the character is not in hash (open paren)
    if (!(char in hash)) {
      // push it to the stack and wait for it's pair
      stack.push(char);
      // else...
    } else {
        // ... if it is in hash, but not characters pair
        if (stack.at(-1) !== hash[char]) {
          // mismatch found
        return false;
          // else a match is found and pop off the matched open paren
        } else {
            stack.pop();
          }
      }
    }
  // if all the pairs are matched --> stack.length === 0
  return stack.length === 0;
};

  
  
// console.log(isValid('(((((((())))))))'))

/////////////////////////////////////////////////////////////////

/*
Given a string s, check if it can be constructed by taking a 
substring of it and appending multiple copies of the substring 
together.

 
Example 1:

Input: s = "abab"
Output: true
Explanation: It is the substring "ab" twice.
Example 2:

Input: s = "aba"
Output: false
Example 3:

Input: s = "abcabcabcabc"
Output: true
Explanation: It is the substring "abc" four times or the substring "abcabc" twice.
 

Constraints:

1 <= s.length <= 104
s consists of lowercase English letters.
*/

// "aabbaabb"

// "aaabbbaaabbbaaabbbaaabbbaaabbbaaabbb"
// a
// aa
// aaa
// aaab
// aaabb

// aaabbb

// b
// bb
// bbb
// bbba
// bbbaa

// bbbaaa.reverse()


// "aaabbbaaa aaabbbaaa aaabbbaaa"

""
// aaa ..fsdf  aa

// "abab"
// "abcabc"

// "abcabcabc"

// the length of the string
// repeated substring

// if string's length is even, see if slice of first half matches second

// brute force:
// use window size ranging from 1 to string.length / 2
//   iterate through string and see if it can be divided by window

var repeatedSubstringPattern0 = function(s) {
  let substr1 = '';
  let substr2 = '';
  for (let i = 0; i < s.length; i += 1) {
    substr1 += s[i];
    substr2 = s[s.length - 1 - i] + substr2;
    if (substr1 === substr2) break;
  }
  return substr1;
};

const repeatedSubstringPattern = (s) => {
  if (s.length === 1) return false;
  windowSearch:
  for (let i = 1; i < Math.ceil(s.length / 2) + 1; i += 1) {
    const substring = s.slice(0, i);
    for (let j = 0; j < s.length; j += i) {
      // console.log('substring:', substring, 'checking:', s.slice(j, j + i))
      if (s.slice(j, j + i) !== substring) continue windowSearch; 
    }
    return true;
  }
  return false;
}

// console.log(repeatedSubstringPattern("aabbaabb"))
// "aaabbbaaa aaabbbaaa aaabbbaaa"

/////////////////////////////////////////////////////////////////

/*
Given two arrays of integers nums and index. Your task is to 
create target array under the following rules:

Initially target array is empty.
From left to right read nums[i] and index[i], insert at 
index[i] the value nums[i] in target array.
Repeat the previous step until there are no elements to 
read in nums and index. Return the target array.

It is guaranteed that the insertion operations will be valid.

 
Example 1:

Input: nums = [0,1,2,3,4], index = [0,1,2,2,1]
Output: [0,4,1,3,2]
Explanation:
nums       index     target
0            0        [0]
1            1        [0,1]
2            2        [0,1,2]
3            2        [0,1,3,2]
4            1        [0,4,1,3,2]
Example 2:

Input: nums = [1,2,3,4,0], index = [0,1,2,3,0]
Output: [0,1,2,3,4]
Explanation:
nums       index     target
1            0        [1]
2            1        [1,2]
3            2        [1,2,3]
4            3        [1,2,3,4]
0            0        [0,1,2,3,4]
Example 3:

Input: nums = [1], index = [0]
Output: [1]
*/

/*
iterate thorugh nums and index with i:
  target.splice(index[i], 0, nums[i]);
return target
*/

var createTargetArray = function(nums, index) {
   const target = [];
  for (let i = 0; i < nums.length; i += 1){
    target.splice(index[i], 0, nums[i]);
  }
  return target;
};

/////////////////////////////////////////////////////////////////

/*
Write an function that takes in a number and returns a bool 

If the number is happ, return true
else false

happy number are: 
num = 19

1**2 + 9**2 = 82
8**2 + 2**2 = 68
6**2 + 8**2 = 100
1**2 + 0**2 + 0**2 = 1

return true!

*/

const isHappy = (n) => {
  // initialize a new Set object
    const seen = new Set()
    // while n is 'not happy'
    while (n > 1) {
      const squares = [];
      // populate squares with the n's digits squared
      while (n > 0) {
        const last = n % 10;
        squares.push(last ** 2);
        n = Math.floor(n / 10);
      }
      // reduce squares to a new number (sum)
      const sum = squares.reduce((a, b) => a + b);
      // if sum is in the set seen, number is not happy
      if (seen.has(sum)) return false;
      // if it hasn't add it to the set
      seen.add(sum)
      // and start over with sum = n
      n = sum;
    }
    // return the bool
    return n == 1;
  }


/////////////////////////////////////////////////////////////

var mySqrt = function(x) {
  if (x < 2) return x;
  if (x == 2) return 1;
  for (let i = 2; i <= x/2+1; i += 1) {
    if (i * i > x) return i - 1;
    if (i * i === x) return i;
  }
};

/////////////////////////////////////////////////////////////
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

 // Define helper function to find the height of a subtree
const height = (root) => {
  // If you reach the end of the tree return 0
  if (root === null) return 0;
  // Otherwise return 1 plus which ever is greater between the left and right
  return 1 + Math.max(height(root.left), height(root.right));
}



// Main function
var isBalanced = function(root) {
  // base case - if root is null it is a balanced tree
  if (root === null) return true;
  // break case, if the abs value of height(left) - height(right) > 1 not balanced
  if (Math.abs(height(root.left) - height(root.right)) > 1) {
    return false;
  }
  // recusive case, check if the left branch is balanced AND if the right branch is balanced
  return isBalanced(root.left) && isBalanced(root.right);
};

/////////////////////////////////////////////////////////////
/*

Given a sorted array of distinct integers and a target value, 
return the index if the target is found. If not, return the 
index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.


Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2

*/


var searchInsert = function(nums, target) {
  //if (target > Math.max(...nums)) return -1
  for (let i = 0; i < nums.length; i++) {
    let e = nums.length - 1 - i;
    let indexDiff = e - i;
    if (nums[e] === target){
      return e;
    }
    if (nums[i] === target) {
      return i;
    }
    if (nums[i] > target) {
      return i
    }
    if (nums[e] < target) {

      return e + 1
    }
  }  
};

// const testCase = [1,3,5,6];
// const test1 = 5;
// const test2 = 2;
// const test3 = 4;
// const test4 = 7;

// console.log(searchInsert(testCase, 5));

/////////////////////////////////////////////////////////////

var twoSum = function(nums, target){
  // initialize a hashmap
  const hash = {};
  for (let i = 0; i <= nums.length - 1; i++) {
    // find nums[i]'s compliment
    let comp = target - nums[i]
    
    // if the comp is in the hash
    if (comp in hash) {
      return [i, hash[comp]];
    }
    // populate the hash
    hash[nums[i]] = i;
  }
  return hash
};

const testArr = [2,3,7,11,15]

//console.log(twoSum(testArr, 9))


/////////////////////////////////////////////////////////////

/*
Given an integer array nums sorted in non-decreasing order, 
return an array of the squares of each number sorted in non-decreasing order.

 

Example 1:

Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].
Example 2:

Input: nums = [-7,-3,2,3,11]
Output: [4,9,9,49,121]
*/

const sortedSquares = function(numArr) {

  // initial an arra to mutate
  let nums = numArr;

  // initialize an array to populate
  const result = []

  // iinitialize left and right pointers
  let L = 0
  let R = nums.length - 1

  // iterate through the nums array
  for (let i = R; i >=0; i--) {

    // initialize a temp variable square 
    let square;

    // If the abs value of L el is less that R el
    if (Math.abs(nums[L]) < Math.abs(nums[R])) {
      // square is the R el
      square = nums[R]
      // decrement R
      R--;
      }

    else {
      // else square is L el
      square = nums[L]
      // Increment L
      L++;
      }
    // add square squared to the first postion of result
    result.splice(0,0,square*square)
    }
  // return result
  return result
  }


      // console.log(result)
      // console.log(pushResult)
      // console.log(nums)
let testArr = [-7,-3,2,3,11]

//console.log(sortedSquares(testArr)) // logged: [4, 9, 9, 49, 121]


/////////////////////////////////////////////////////////////

/*
Given an array, rotate the array to the right by k steps, where k is non-negative.

Example 1:

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 0 steps to the right: [1,2,3,4,5,6,7]
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]


NOTE - array.splice(start, deleteCount, newElem1, newElem2, ..., newElemN);

*/
// Solution 1 (return a new array)

// O(n) time 

const rotate = (nums, k) => {
  // base case:
  if (k === 0) return nums;

  // initialize an array to return
  let result = [...nums]
  // iterate through nums array
  for (let i = 0; i < nums.length; i++) {
    // find the index after rotation
    let kIndex = i - k;

    // Cycle back to the start
    if (kIndex < 0) {
        kIndex = Math.abs(nums.length + kIndex)
      //console.log('new kIndex: '+ String(kIndex))
      }
    // populate the result with rotated indices
    let temp = nums[kIndex]
    result.splice(i,1, temp)
  }
  return result;
}


//const testArr = [1,2,3,4,5,6,7,8,9,10,11,12,13]


console.log(rotate(testArr, 2)) // logged: [3,99,-1,-100]


// console.log(testArr.splice(1,1, 4))
// console.log(testArr)

// Solution 2 (Brute Force, O(n)*k) (where k < nums.length)

// not great for time, but more memory efficient

// shift the nums array over 1 for each k

function rotate2(nums, k) {
  // do the fewest rotations necessary
  // ex (nums.legnth = 12, k = 121 => new K = 1)
  if (k >= nums.length) {
    k = k%nums.legnth
  }
  // iterate the algorithim k times
  for (let i = 0; i < k; i++) {
    // initialize a temp variable for the last element "previous"
    let previous = nums.at(-1);
    // iterate through nums
    for (let j = 0; j < nums.length; j++) {
      // initialize a temp variable 
      let temp = nums[j];
      // set the first element to previous
      nums[j] = previous;
      // update previous to the new previous
      previous = temp;
    }
  }
  return nums;
}



//rotate2(testArr, 2)
//console.log(rotate2(testArr, 2)) // logged: [3,99,-1,-100]

/*
Explanation:
rotate 0 steps to the right: [11,12,13,14,15,16,17]
current = start = 0
prev = 11
do while...

next = 0 + 3 % nums.length = 3%7 = 3 
temp = 14; (nums[next])

mutate the array... nums[next] = prev (11)
14 -> 11
prev = temp; now 14

rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
*/

// Solution 3 (Using Cyclice Replacements)

function rotate3(nums, k) {
  // inititalize a count variable
  let count = 0;
  // iterate through nums (but look at the count variable!)
  for (let start = 0; count < nums.length; start++) {
    // initialize a temp variable "current" (the current index being updated)
      // this mark which cycle the 
    let current = start;

    // initialize a temp variable prev (the previous element)
    let prev = nums[start];
    do {
      // "next" tracks which index to jump to next
      // it's definition makes sure you are changing elements before you 
        // Includeing the mod nums.length makes the function more efficient
      let next = (current + k) % nums.length; // make jumps (i+k) -> (i +2k) -> ...
      // temp hold the value at the next index
      let temp = nums[next];
      // update the element with the prev value 
      nums[next] = prev;
      // update previous to temp
      prev = temp;
      // update index "current" to index "next" 
        // bc of mod calculation, next will cycle
      current = next;
      // increment count (stops the for loop)
      count++;
    } while (start != current); //
  }
  return nums
}




// rotate2(testArr, 2)
//console.log(rotate3(testArr, 2)) // logged: [13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12

// One solution that uses more memory

/////////////////////////////////////////////////////////////////

var moveZeroes = function(nums) {
    const zeros = [];
    let len = nums.length - 1

    for (let i = 0; i < len; i++){
        if (nums[i] === 0){
          nums.splice(i,1)
          zeros.push(0);
          i--;
          len--;
        }
    }
    return [...nums, ...zeros];
};

const testNums = [0,0,1,0,3,12];

//console.log(moveZeroes(testNums));


// Solution 2
// inplace solution

// pretty fast O(n) and constant no extra memory

var moveZeroes1 = function(nums) {
  // initialize a length of nums variable
  let len = nums.length - 1
  // initialize a counter varaible
  let i = 0
  while (i < len) {
    // conditional to check if element is a 0
    if (nums[i] === 0){
      // if so remove it
        nums.splice(i,1)
        // push a zero to the end
        nums.push(0);
        // go back to 2 because we are incrementing i below
        i -= 2 ;
        // decrease the len variable to no count found zeros
        len--;
      }
      // increment i to check next element
    i++
    }
    return nums;
};
console.log(moveZeroes1(testNums));

//////////////////////////////////////////////

/*
Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, 
find two numbers such that they add up to a specific target number. Let these two numbers be 
numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.
Return the indices of the two numbers, index1 and index2, added by one as an 
integer array [index1, index2] of length 2.

The tests are generated such that there is exactly one solution. You may not use the same element twice.

Your solution must use only constant extra space.

 

Example 1:

Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].

*/

// NOTE -- Slow

var twoSum = function(nums, target) {
  // initialize a hashmap
    const hash = {};
    // initialize a compliment variable
    let comp
    // ioterate through the arr
    for (let i = 0; i < nums.length; i++) {
        // calculate the compliment
        // console.log(i)
        comp =  target - nums[i]
        // console.log(comp)
        // if the complimnet is in the hash
        if (comp in hash) {
            // return the indices
            return [hash[comp]+1, i+1]
        }
        // add each element and comp to the hash
        hash[nums[i]] = i
    }
};

// This is an already sorted array, so use two indices to search


var twoSum = function(nums, target) {
    let comp;
    let current;
    for (let i = 0; i < nums.length; i++) {
        comp = target - nums[i];
        for (let j = nums.length - 1; j > 0; j--) {
          current = nums[i] + nums[j]
          if (target === current){
            return [i+1, j+1]
          }
        }
    }
};


console.log(twoSum(testArr2, 2));

// Two pointer Solution is much faster!!!

function twoSum(numbers, target) {
  // initialize the two pointers
  let l = 0;
  let r = numbers.length - 1; 

  // while left pointer is less than right pointer (l and r meet in the middle)
  while (l < r) {

    // initialize a sum to left and right elements
    const sum = numbers[l] + numbers[r];
    
    // the return condition 
    if (sum === target) {
      // return indexes if true
      return [l + 1, r + 1];
    }
    // THE CLEVER BIT
    // since the array is already sorted!!!
    // we can infer about which side should be incremeneted/ decremented

    // If sum is less that target, increase left
    if (sum < target) {
      l++;
      // else decrease right!
    } else {
      r--;
    }
  }
}


///////////////////////////////////////////////////////////////////////////

/*
Given a linked list, swap every two adjacent nodes and return its head. You 
must solve the problem without modifying the values in the list's 
nodes (i.e., only nodes themselves may be changed.)
 
*/

// Iterative Approach


let swapPairs = function(head) {
    // create a new linked list
    let dummy = new ListNode();
    // Set the next element of dummy to head
    dummy.next = head;
    // Set up a returnable linked list
    let result = dummy;
    // While there is a ll.next and a ll.next.next
    while(dummy.next && dummy.next.next){

        // break the list into pairs
        let p= dummy.next;
        let q = dummy.next.next;

        dummy.next = q;
        
        p.next = q.next;
        q.next = p;
        dummy = p
   
    }
    return result.next
};

// Recursive  (slower than the Iterative Approach)

function swapPairs(head) {

        // If the list has no node or has only one node left.
        if (!head || !head.next){
            return head;
        }

        // Nodes to be swapped
        let firstNode = head;
        let secondNode = head.next // point to the rest of the linked list minus the first node

        // Swapping
        firstNode.next  = swapPairs(secondNode.next) //
        secondNode.next = firstNode 
        
        // Now the head is the second node

        // We eventually return the pointer of the head of the swapped list
        return secondNode;
}

// Stack Method


function swapPairs(head) {
  // initialize a stack
  let stack = [];
  stack.push(null);
  // initialize a new Linked List
  let current = new ListNode()
  current = head;


  while(current != null) { 
    if(stack.length == 2) {
      let next = current.next;
      let prior = stack.pop();
      let priorPrior = stack.pop();
      if(priorPrior != null) priorPrior.next = current;
      else head = current;
      current.next = prior;
      prior.next = next;
      current = prior;                
      }
    stack.push(current);
    current = current.next;
    }
  return head;
}


////////////////////////////////////////////

/*
reverse a linked list
*/

//Solution 1: recursion

var reverseList = function(head) {
    
    // base case
    if (head == null || head.next == null) return head
    
    // Expand the linked list onto stack frames
    let result = reverseList(head.next);
    // console.log(result)
    // makinig the last element in the stack frame the head
    head.next.next = head
    // and the first element in every frame point towards null
    head.next = null;
    
    // once the base case is reached, return result
    return result;
};



/*
You are given two non-empty linked lists representing two non-negative integers. 
The digits are stored in reverse order, and each of their nodes contains a single digit. 
Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.
*/


// with linked lists

function addTwoNumbers(l1, l2) {
    // create new Linked List
        const dummyHead = new ListNode(0);
    // initialize a variable to hold onto current nod
        let curr = dummyHead;
    // initialize a variable to hold onto the carry over
        let carry = 0;
    // while the 3 conditions are are false
        while (l1 !== null || l2 !== null || carry !== 0) {
            // get the next value of l1
            let x;
            (l1 !== null) ? x = l1.val : x = 0;
            // get the next value of l2
            let y;
            (l2 !== null) ? y = l2.val : y = 0;
            // find the next sum 
            let sum = carry + x + y;
            // find the new the new carry
            carry = Math.floor(sum / 10);
            // set the new list node
            curr.next = new ListNode(sum % 10);
            // update current
            curr = curr.next;
            // update l1
            if (l1 != null)
                l1 = l1.next;
            // update l2
            if (l2 != null)
                l2 = l2.next;
        }
    // return the new linked list
        return dummyHead.next;
    }


// with arrays

/*

Not the most elegant solution, but it works.

The first step is to make an arrat of all the summed elements.
After we have the arr of summed elements we iterate throught that 
array with a while loop, mutating the array based on condtionals

1) if the element is below 10, we leave it alone, and move on
2) if the element is above 10 we set the current element to the last digit
    of the current elements number (the 1's place)
    3) update the curent element by dividing by zero to reflect this change
    4) the next element has the remainder add to it
    5) if there is not next element, the remainder is pushed onto the array

  - we move onto the next element (that has just been added to) 

This is O(2*n)

I think I can make it O(n) though and do all the condtional logic within 1 while loop

*/

/////////////////////////////////////////////////////////////////

function addTwoNumbers(arr1, arr2) {
    // initialize an array to debug algo
    let digArr = [];
  const len1 = arr1.length
  const len2 = arr2.length
  const index = Math.max(len1, len2)
    
    // iterate through arr1 and arr2 and sum elements
    for (let i = 0; i < index; i++) {
      if (i < len1 && i < len2){
        // append the sume to the new array
        digArr.push(arr1[i] + arr2[i]);
      }
      // if i is counting past the length of one of the arrays
      // We just append the next element of the the longer array
      else if (i <= len1 && i >= len2) {
        digArr.push(arr1[i])
      } else if (i >= len1 && i <= len2) {
        digArr.push(arr2[i])
      }
    }
    let i = 0
    while (i < digArr.length) {
        let el = digArr[i]
        if (el >= 10) {
            let last = el%10
            digArr[i] = last
            el = Math.floor(el/10)
            if (i < digArr.length - 1){
                digArr[i+1] = digArr[i+1] + el
            }
            else {
                digArr.push(el)
            }
        }
        i++;
    }
    return digArr
};

/////////////////////////////////////////////////////////////////

/*

ABOSOLUTE MINIMUM DIFF

Given an array of distinct integers arr, find all pairs of elements with the minimum absolute difference of any two elements.

Return a list of pairs in ascending order(with respect to pairs), each pair [a, b] follows

a, b are from arr
a < b
b - a equals to the minimum absolute difference of any two elements in arr
 

Example 1:

Input: arr = [4,2,1,3]
Output: [[1,2],[2,3],[3,4]]
Explanation: The minimum absolute difference is 1. List all pairs with difference equal to 1 in ascending order.

*/

const minimumAbsDifference = arr => {
    // initialize variable and result arr
    let res = [];
    let smallest = Infinity;
    
    // sort the array
    arr.sort((a, b) => a - b);
    
    // iterate throuhg sorted array
    for (let i = 0; i < arr.length - 1; i++) {
      // ifnew smallest is fount
        if (arr[i + 1] - arr[i] < smallest) {
          // update smallest
            smallest = arr[i + 1] - arr[i]
            // and reset result arr
            res = [[arr[i], arr[i + 1]]];
            // if smallest diff is found
        } else if (arr[i + 1] - arr[i] === smallest) {
            //push to result array
            res.push([arr[i], arr[i + 1]])
        }
    }
    
    return res;
}
