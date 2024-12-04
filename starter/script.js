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
//console.log(job); //error: the job variable is still in the temporal death zone (before initialization)
//console.log(year); //error: the job variable is still in the temporal death zone (before initialization)
var me = 'Jonas';
let job = 'teacher';
const year = 1991;

// FUNCTIONS
/* console.log(addDecl(2, 3)); //we can call a function before is declareted in the code
console.log(addDecl(2, 3)); // cannot call this function before is declared in the code because it is stored in the const variable, which entails that at this point it is still in the temporal death zone
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
