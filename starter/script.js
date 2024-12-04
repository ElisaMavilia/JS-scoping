'use strict'; // The scope chain works with the strict mode

/* function calcAge(birthYear){
    const age = 2037 - birthYear;
    console.log(firstName); //this variable is readable inside this scope because the variable is declared in the global scope (the parentscope)
    
    function printAge(){
        let output = `You are ${age}, born in ${birthYear}`; // the parameter of a function works exactly like a normal variable
        console.log(output); //these variables are readable because of the chain scope: this second function is the child of the first one

        if (birthYear >= 1981 && birthYear <= 1996) {
            var millenial = true;
            const firstName = 'Steven'; //being in this scope, firstName variable is different from the one that has been declared in the global scope
            const str = `Oh, You are a Millenial, ${firstName}`;
            console.log(str);

            function add(a, b){
                return a + b;
            }
           // let output = 'New output'; //We redifined a variable that has been created in the parent scope
           const output = 'New output'; // it is a new variable with the same name as the outerscope variable
        }
        //console.log(str); //This variable is not accessible outside the block scope (if statement)
        console.log(millenial); //The var variable is function scoped and is readable outside of the block scope
        //add(2, 3); //this function in inside the if block and is not accessible outside it
        console.log(output); //it is calling the variable in its own scope (the printAge() function)a
    }
    printAge();
    return age;
}

const firstName = 'Jonas';
calcAge(1991);
// console.log(age) // this variable is not accessible outside the calcAge scope: the console shows a ReferenceError
printAge(); // we cannot call this function in the global scope: ReferenceError
 */


// VARIABLES
console.log(me);
//console.log(job); //error: the job variable is still in the temporal dead zone (before initialization)
//console.log(year); //error: the job variable is still in the temporal dead zone (before initialization)
var me = 'Jonas';
let job = 'teacher';
const year = 1991;

// FUNCTIONS
/* console.log(addDecl(2, 3)); //we can call a function before is declareted in the code
console.log(addDecl(2, 3)); // cannot call this function before is declared in the code because it is stored in the const variable, which entails that at this point it is still in the temporal dead zone
console.log(addArrow(2, 3)); // cannot call this function before it is declared in the code because it is stored in the var variable. This entails that the var variable is undefined which and the console produces an error that shows that something undefined is not a function

function addDecl(a, b){
    return a+b;
}

const addExpre = function (a, b){
    return a + b;
}

var addArrow = (a, b) => a + b; */

// Hoisting Example

if(!numProducts) deleteShoppingCart(); //the var variable, which results as undefined, will trigger the execution of this function because undefined is false as well as the condition expressed in this if statement: if false (undefined is false) delete the shopping cart

var numProducts = 10; 

function deleteShoppingCart() {
    console.log('All products deleted!')
}

var x = 1; // inspecting the object window we will find the x var variable with its value (1)
let y = 2; // variables declared with let or const do not create properties on the window object
const z = 3;

console.log(x === window.x);//the result will be true
console.log(y === window.y);//the result will be false
console.log(z === window.z);//the result will be false

// THIS KEYWORD
console.log(this); //this keyword in the global scope points to the window object

// inside a called function (not method)
const calcAge = function(birthday){
    console.log(2037 - birthday);
    console.log(this); // we will get undefined because we are using the strict mode, otherways this will points to the window object
}
calcAge(1991);

// inside an arrow function
const calcArrow = birthday => {
    console.log(2037 - birthday);
    console.log(this); // we will get the window object because the arrow function will get the lexical this keyword that points to its parent function (the parent scope, in this case the global scope)
}
calcArrow(1991);

// inside of a method

/* const jonas = {
    year: 1991,
    calcAge: function() {
        console.log(this); //this will point to the object itself
        console.log(2037 - this.year);
    }
};
jonas.calcAge();


const matilda = {
    year: 2017,
};

matilda.calcAge = jonas.calcAge; //method borrowing (we are borrowing a method inside an object from another object)
matilda.calcAge(); // in this case the this keyword will be matilda and not jonas because it will always point to the object that is calling the method (even though it is inside another object)

// ouside an object
const f = jonas.calcAge;
f(); //this is a regular function which is not attached to any object: in this case the this method will result in undefined, if in stric mode

 */

// var firstName = 'Matilda'; // in this case the var variable creates a property inside the window object

const jonas = {
    firstName: 'Jonas',
    year: 1991,
    calcAge: function() {
        console.log(this); //this will point to the object itself
        console.log(2037 - this.year);

// SOLUTION 1 WITH SELF
       /*  const self = this; 
        The variable self is used to save the value of this from the outer context (the calcAge method) and make it available inside the isMillenial function. This is necessary because:
        In a regular function (non-arrow function), this does not retain the context of the method where it is defined but takes the context of the call. In strict mode, this means that this is undefined in regular functions if they are not called as part of an object.
        Saving the value of this in a variable like self allows access to the correct context, regardless of how the inner function is executed. 

            const isMillenial = function() {
            console.log(this);
            console.log(this.year >= 1981 && this.year <= 1996); //this keyword is undefined
            // console.log(self);
            console.log(self.year >= 1981 && self.year <= 1996);
        }; 
        */
// SOLUTION 2 WITH ARROW FUNCTION
             const isMillenial = () => {
                console.log(this);
                console.log(this.year >= 1981 && this.year <= 1996); // the result is true because the arrow function uses the this keyword from the parent scope (jonas)
        }; 

        isMillenial();
    },

    greet: () => console.log(`Hey ${this.firstName}!`), // The result is undefined because the arrow function use the parent´s scope (in this case the global scope where the object jonas is located) It is better to not use the arrow function as a method but instead using a normal function expression
}
jonas.greet();
jonas.calcAge();

