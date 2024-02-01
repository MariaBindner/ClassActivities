// create five variables and assign them values
// each variable should reference a different primitive data type
// REMEMBER: you should never DELIBERATELY assign "undefined" to a variable
string number Boolean null undefined
// print the type of each variable in this order:
// string, number, boolean, undefined, null
let name = "David"
let age = "40"
let quesadilla = true;
let something = null;
let nothing;
// create a variable that references a template literal
// inside the template literal, use two of the above variables
let number =  `My name is ${name} and I am ${age}`;
// reassign the value of the variable that references "null"
something = 5;
// print the value and its type
console.log(`The value of something is ${something}, and its data type is ${typeof something}`)
// print a variable that causes a ReferenceError

// alter the previous line to no longer cause a ReferenceError