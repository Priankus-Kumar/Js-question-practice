// Create a mini biodata program using variables and template literals.


var name = prompt("Enter the name:");
var age = Number(prompt("Enter the age:"));
var city = prompt("Enter the city name:");
console.log(`my name is ${name} and 1 am ${age} year old and live ${city}`);

// Calculate the area of a rectangle..

var Length = Number(prompt("length:"));
var breath = Number(prompt("breath:"));
console.log("area of rectangle:", Length * breath);

// Create a username generator using first name and birth year.

var firstname = prompt("Enter the first name:");
var dob = Number(prompt("Enter the year of birth:"));
console.log(firstname + dob);
   
// Count the total characters in a sentence excluding spaces.

let str = "hello bro how are you";
let word = str.replaceAll(" ", "").length;
console.log(word);

// Take two numbers and print which one is greater.

let num1= Number(prompt("Enter the number 1:"))
let num2= Number(prompt("Enter the number 2:"))
if(num1>num2){
    console.log(num1, " is largest then" , num2);
}
else{
    console.log(num2, "is largest then",num1)
}
 
// Check whether a password length is greater than 8.

let password = "122";
if (password.length >= 8) {
  console.log("password is suggest");
} else {
  console.log("invalid");
}

// Find whether a number is a multiple of 10.

let num1 = Number(prompt("Enter the number:"));
if (num1 % 10 == 0) {
  console.log("divided");
} else {
  console.log("not divied");
}

// check whether a number is divisible by 2, 3, or both.

let num1 = Number(prompt("Enter the number:"));
if (num1 % 2 == 0 || num1 % 3 == 0) {
  console.log("divided");
} else {
  console.log("not divided");
}

//  Generate a random OTP of 4 digits.

let otp = Math.floor(Math.random() * 9999) + 1000;
console.log(otp);

// Reverse a 3-letter string manually.
let str = "abc";
let first = str.charAt(2);
let second = str.charAt(1);
let third = str.charAt(0);
console.log(first, second, third);


//Create a mini ATM balance checker.

let bal = 5000;
let drawAmt = 2000;

if (drawAmt <= bal) {
    balance = bal - drawAmt;
    console.log("Withdrawal Successful!");
    console.log("Remaining Balance: ₹" + bal);
} else {
    console.log("Insufficient Balance!");
}