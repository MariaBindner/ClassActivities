// TODO: using the function expressions below, refactor them into function declarations

//greet function expression
//const greet = function() {
//  console.log("Hello!");
// };
function greet() {
console.log("Hello!")
}


//greet function declaration

//function expression threeModTwo
function threeModTwo = function() {
  console.log(3 % 2);
};
function threeModTwo() {
  console.log("3 % 2");
}
// function declaration threeModTwo


//function expression checkDrivingAge
let age = 18;
const checkDrivingAge = function() {
  if (age >= 16) {
    console.log(true);
  } else {
    console.log(false);
  }
};
// function declaration checkDrivingAge
function checkDrivingAge() {
  if (age >= 16) {
    console.log(true);
  } else {
    console.log(false);
  }
}
