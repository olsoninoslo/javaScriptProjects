/* CHALLENGE 1 */

function sayHowdy() {
  console.log('Howdy');
}

function testMe() {
  setTimeout(sayHowdy, 0);
  console.log('Partnah');
}
// After thinking it through, uncomment the following line to check your guess!
// testMe(); // what order should these log out? Howdy or Partnah first?

// 'Partnah' was logged first

/* CHALLENGE 2 */

function delayedGreet() {
  // ADD CODE HERE
  setTimeout(function(){
    console.log('welcome')}, 3000);
}
// Uncomment the following line to check your work!
// delayedGreet(); // should log (after 3 seconds): welcome


/* CHALLENGE 3 */

function helloGoodbye() {
  // ADD CODE HERE
  console.log('hello');
  setTimeout(function(){
    console.log('good bye');
  }, 2000)
}
// Uncomment the following line to check your work!
// helloGoodbye(); // should log: hello // should also log (after 3 seconds): good bye


/* CHALLENGE 4 */

function brokenRecord() {
  // logs the decided phrase
  console.log('hi again');
  // setTimout calls the original fiunction after 1 sec and process begins again
    setTimeout(()=>{
        brokenRecord()
    }, 1000);
  }


// Uncomment the following line to check your work!
// brokenRecord(); // should log (every second): hi again


/* CHALLENGE 5 */

function limitedRepeat() {
  // ADD CODE HERE
}
// Uncomment the following line to check your work!
// limitedRepeat(); // should log (every second, for 5 seconds): hi for now


/* CHALLENGE 6 */

function everyXsecsForYsecs(func, callNum=5, interval = 1000) {
  // ADD CODE HERE
  // condtional control is a recursive call is made
	if (sec > 0) {
    // if it is, the function is executed
    func()
    // setTimeout then proceedst to wait to make the next recusive call with call number decreased by 1
  	setTimeout(()=> {
    	everyXsecsForYsecs(func, callNum - 1, interval);
  }, interval)
    // else pass
    return {};
  }
}
// Uncomment the following lines to check your work!
// function theEnd() {
//   console.log('This is the end!');
// }
// everyXsecsForYsecs(theEnd, 10, 2000); // should invoke theEnd function every 2 seconds, for 20 seconds): This is the end!


/* CHALLENGE 7 */

function delayCounter(target, wait, i = 1) {
  // return a function
	const returnable = () => {
    // log the the counter 'i'
    console.log(`log: ${i}`);
    // if 'i' is less than the target, call the returned function
    if (i < target) {
      // set timeout before calling the function though
      setTimeout(()=> {
        returnable(target, wait, i++)
      }, wait);
    }
    // if 'i' is greater than targer, pass
    return {};
  }
  return returnable;
}


// UNCOMMENT THESE TO TEST YOUR WORK!
// const countLogger = delayCounter(5, 1000)
// countLogger();
// After 1 second, log 1
// After 2 seconds, log 2
// After 3 seconds, log 3

/* CHALLENGE 8 */

function promised (val) {
  // ADD CODE HERE
    console.log('and...')
  return new Promise(function(){
    // a function call to setTimeout, and a function to log val (afer 2 seconds)
    setTimeout(function(){
      console.log(val)}, 2000);
    // setTing another promise to the same promise to log a final message
    setTimeout(function(){
      console.log('here it is!')}, 4000)
  });
}


// UNCOMMENT THESE TO TEST YOUR WORK!
// const createPromise = promised('wait for it...');
// createPromise.then((val) => console.log(val)); 

// will log "wait for it..." to the console after 2 seconds

/* CHALLENGE 9 */

class SecondClock {
  constructor(cb) {
    this.cb = cb;
  }
  // ADD METHODS HERE
  start() {
  	const ID0001 = setInterval(function clear(){
      console.log('happy')}, 1000);
    return ID0001;
  };
  
  reset() {
    setInterval(
    function clear() {
            clearInterval(this) 
       return clear;
    }()
, 1000)
  }
}

// UNCOMMENT THESE TO TEST YOUR WORK!
const clock = new SecondClock((val) => { console.log(val) });
console.log(clock.cb('happy'))
console.log("Started Clock.");
clock.start();
setTimeout(() => {
    clock.reset();
    console.log("Stopped Clock after 6 seconds.");
}, 6000);

/* CHALLENGE 10 */

function debounce(callback, interval) {
  // ADD CODE HERE
}

// UNCOMMENT THESE TO TEST YOUR WORK!
// function giveHi() { return 'hi'; }
// const giveHiSometimes = debounce(giveHi, 3000);
// console.log(giveHiSometimes()); // -> 'hi'
// setTimeout(function() { console.log(giveHiSometimes()); }, 2000); // -> undefined
// setTimeout(function() { console.log(giveHiSometimes()); }, 4000); // -> undefined
// setTimeout(function() { console.log(giveHiSometimes()); }, 8000); // -> 'hi'



// Extra: delay a callback

function delayCb(callback, milliSec) {
  // closure requires us to output a function
  function output(...args){
    // returning setTimeout to return the callback and the delay of the callback
      return setTimeout(() => {callback(...args)}, milliSec) 
  }; // end of output function
  return output // return the output function "output"
}


// UNCOMMENT THE CODE BELOW TO TEST DELAY
// let count = 0;
// const delayedFunc = delayCb(() => count++, 1000);
// delayedFunc();
// console.log(count); 						// should print '0'
// setTimeout(() => console.log(count), 1000); // should print '1' after 1 second
