/****************************************************************
                  WORKING WITH OBJECT LITERALS
****************************************************************/

/*** CHALLENGE 1 ***/

function makePerson(name, age) {
	// add code here
  // Create new object
const newPerson = {}//Object.create(null);
  // create name property
	newPerson.name = name;
  //create age property
  newPerson.age = age;
  return newPerson;
}


const vicky = makePerson('Vicky', 24);


// /********* Uncomment these lines to test your work! *********/
console.log(vicky.name); // -> Logs 'Vicky'
console.log(vicky.age); // -> Logs 24





/****************************************************************
                       USING OBJECT.CREATE
****************************************************************/

/*** CHALLENGE 2 ***/

const personStore = {
	// add code here
  // greet : greet's aynonmous function
 'greet': function(){return console.log('hello')}
};

// /********* Uncomment this line to test your work! *********/
personStore.greet(); // -> Logs 'hello'



/*** CHALLENGE 3 ***/

function personFromPersonStore(name, age) {
	// add code here
  // creating a new object with prototype from personStore
	const newPerson = Object.create(personStore);
  // creating name property
	newPerson.name = name;
  // creating age property
  newPerson.age = age;
  return newPerson;

}

const sandra = personFromPersonStore('Sandra', 26);


// /********* Uncomment these lines to test your work! *********/
console.log(sandra.name); // -> Logs 'Sandra'
console.log(sandra.age); //-> Logs 26
sandra.greet(); //-> Logs 'hello'



/*** CHALLENGE 4 ***/

// add code here
// Add introduce property with key of an aynonmous function
sandra['introduce'] = function(){console.log('Hi, my name is Sandra')}

sandra.introduce(); // -> Logs 'Hi, my name is Sandra'





/****************************************************************
                    USING THE 'NEW' KEYWORD
****************************************************************/

/*** CHALLENGE 5 ***/
// Create a function PersonConstructor that uses the this keyword
function PersonConstructor() {
  // add code here
  // the 'this' keyword save a single property, 'greet' to a key of an anonymous
  // function the log 'hello'
  this.greet = function(){
    console.log('hello');
  };
}



// /********* Uncomment this line to test your work! *********/
const simon = new PersonConstructor;
simon.greet(); // -> Logs 'hello'



/*** CHALLENGE 6 ***/

function personFromConstructor(name, age) {
	// add code here
  // creating an object using the 'new' keyword
  const newPerson = new PersonConstructor;
  // add the name property
  newPerson.name = name;
  // add the age property
  newPerson.age = age;
  return newPerson;
}

const mike = personFromConstructor('Mike', 30);


// /********* Uncomment these lines to test your work! *********/
console.log(mike.name); // -> Logs 'Mike'
console.log(mike.age); //-> Logs 30
mike.greet(); //-> Logs 'hello'



/*** CHALLENGE 7 ***/
// add code here
mike['introduce'] = function(){console.log(`Hi, my name is ${mike.name}`)}

mike.introduce(); // -> Logs 'Hi, my name is Mike'


/****************************************************************
                        USING ES6 CLASSES
****************************************************************/

/*** CHALLENGE 8 ***/

class PersonClass {
	constructor(name) {
    // adding name property to passed in name
		this.name = name;
    }
  // greet method that logs 'hello'
	greet () {
  	console.log('hello');
	}
}


// /********* Uncomment this line to test your work! *********/
const george = new PersonClass;
george.greet(); // -> Logs 'hello'



/*** CHALLENGE 9 ***/

// add code here
class DeveloperClass{
  // Extending the person class by adding an age property
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
  // Adding the introduce method
  introduce(){
    console.log(`Hellow World, my name is ${this.name}`);
  }
}

// /********* Uncomment these lines to test your work! *********/
const thai = new DeveloperClass('Thai', 32);
console.log(thai.name); // -> Logs 'Thai'
thai.introduce(); //-> Logs 'Hello World, my name is Thai'



/****************************************************************
                      EXTENSION: SUBCLASSING
****************************************************************/

const userFunctionStore = {
  sayType: function() {
    console.log("I am a " + this.type);
  }
}

function userFactory(name, score) {
  let user = Object.create(userFunctionStore);
  user.type = "User";
  user.name = name;
  user.score = score;
  return user;
}

/*** CHALLENGE 10 ***/

// Creating of an adminFunctionStore prototyped from userFunctionStore
// !!!==>(only with a different type)<==!!!
const adminFunctionStore = Object.create(userFunctionStore)

/*** CHALLENGE 11, 12, 13 ***/

// Create an adminFactory function
function adminFactory(name, score) {
  // add code here
  // object admin inherits adminFunctionStore methods
  const admin = Object.create(adminFunctionStore);
  // Add propery name to admin obj
  admin.name = name;
  // add property score to admin obj
  admin.score = score;
  return admin
}

// type is undefined
console.log(adminFunctionStore.type);

adminFunctionStore.type = "Admin";

// now type is 'Admin'
console.log(adminFunctionStore.type);

/*** CHALLENGE 14 ***/
/* Put code here for a method called sharePublicMessage*/
// add method to userFuncitonStore that log 'Welcome Users!'
userFunctionStore.sharePublicMessage = function () {
  console.log("Welcome users!");
};

const adminFromFactory = adminFactory("Eva", 5);

// /********* Uncomment these lines to test your work! *********/
adminFromFactory.sayType() // -> Logs "I am a Admin"
adminFromFactory.sharePublicMessage() // -> Logs "Welcome users!"


/****************************************************************
EXTENSION: MIXINS
****************************************************************/

class Dog {
  constructor() {
    this.legs = 4;
  }
  speak() {
    console.log('Woof!');
  }
}

const robotMixin = {
  skin: 'metal',
  speak: function() { console.log(`I have ${this.legs} legs and am made of ${this.skin}`) },
}

let robotFido = new Dog();

robotFido = Object.assign(robotFido, robotMixin);/* Put code here to give Fido robot skills */;

// /********* Uncomment to test your work! *********/
robotFido.speak() // -> Logs "I am made of metal"



// Extra: Implementing Gettters and Setters

const menu = {
  _meal: "_",
  _price: 0,

  // setter
  set mealToCheck(meal) {
    if (typeof meal == "string") {
      this._meal = meal;
    } else {
      console.log("Type Error: Meals are strings");
    }
  },
  set priceToCheck(price) {
    if (typeof price == "number") {
      this._price = price;
    } else {
      console.log("Type Error: Prices are numbers");
    }
  },

  //getter
  get todaysSpecials() {
    if (typeof this._meal == "string" && typeof this._price == "number") {
      return `Todays Special is ${this._meal} for $${this._price}!`;
    } else {
      return "Meal or price was not set correctly!";
    }
  },
};

menu.mealToCheck = "Pasta Ragu";
menu.priceToCheck = 21.99;

// console.log(menu._price)

// console.log(menu.todaysSpecials);
