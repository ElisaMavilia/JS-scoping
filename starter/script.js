'use strict'; // The scope chain works with the strict mode

function calcAge(birthYear){
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
        console.log(output); //it is calling the variable in its own scope (the printAge() function)
    }
    printAge();
    return age;
}

const firstName = 'Jonas';
calcAge(1991);
// console.log(age) // this variable is not accessible outside the calcAge scope: the console shows a ReferenceError
printAge(); // we cannot call this function in the global scope: ReferenceError
