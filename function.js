//                                             Create a function named greet that prints "Hello World".

function greet() {
  console.log("hello world");
}
greet();

//                                              Create a function add(a, b) that returns the sum.

function add(a, b) {
  console.log(a + b);
}
add(2, 3);

//                                            Write a function to calculate the square of a number.

function square(a) {
  console.log(a * a);
}
square(4);

//                                        Create a function that checks whether a number is even or odd.

function oddandeven(number) {
  if (number % 2 == 0) {
    console.log("Number is even", number);
  } else {
    console.log("number is odd", number);
  }
}
oddandeven(33);

//                                           Create a function with default parameter "Guest".

function greets(name = "guest") {
  console.log(name, "is coming");
}
greets();
greets("alice");

//                                       Write a function that returns "Adult" if age ≥ 18 else "Minor".

function age(age) {
  if (age >= 18) {
    console.log("adult");
  } else {
    console.log("minor");
  }
}
age(20);

//                                              Create a function to reverse a string.

function revrsestr(word) {
  let reversed = "";
  for (let a = word.length - 1; a >= 0; a--) {
    reversed = reversed + word[a];
  }
  console.log(reversed);
}
revrsestr("hello");

//                                          Write a function expression for multiplication.

var multiply = function (a, b) {
  console.log(a * b);
};
multiply(3, 8);

//                          Create a function that accepts unlimited numbers and returns their sum using rest operator.

function sum(...number) {
  let total = 0;
  for (let a = 0; a < number.length; a++) {
    total = total + number[a];
  }
  console.log(total);
}
sum(10, 20, 30, 40, 50);

//                                       Create a function that checks if a string is palindrome.

function pailndrome(str) {
  let reverse = str.split("").reverse().join("");
  if (reverse === str) {
    console.log("this is a pailndrome", str);
  } else {
    console.log("this is not a pialndrome", str);
  }
}
pailndrome("hiih");

//                                              Write a function that returns another function.

function father() {
  console.log("hello son");
}
var son = () => {
  console.log("hello father");
  father();
};
son();

//                                      Create a higher-order function that executes another function twice.

function second() {
  console.log("hello this is the second function");
}
function first(num, callback) {
  console.log("this is the first function", num);

  //  console.log(callback)   // in this  they paste the whole function if not you can run it/

  callback(); // use any name rather than callback
}
first(10, second);

//                                    Create a pure function for subtraction.

function subtraction(a, b) {
  console.log(a - b);
}
subtraction(20, 10);

//                                Create an impure function using global variable modification.
let number = 10;
function impure() {
  number++;
  console.log(number);
}
impure()
//                                   Write a callback function example using setTimeout.
setTimeout(() => {
   console.log("heelo")
}, 5000); 

  //                             Create an IIFE that prints "Executed".
//   (function imdiate() {
//     console.log("excuted");
//   },
// )();
