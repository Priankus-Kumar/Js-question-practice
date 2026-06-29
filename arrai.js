// Create an array of 5 fruits.
let fruit = ["apple", "pear", "orange", "banana", "guava"];
console.log(fruit[1]); //Print first and last element of array.
console.log(fruit[4]);
console.log(fruit.length); //Find length of array.

fruit.push(20); //Add element at end using push.
console.log(fruit);

fruit.pop(); //Remove last element using pop.
console.log(fruit);

fruit.unshift(25); //Add element at beginning using unshift.
console.log(fruit);

fruit.shift(); //Remove first element using shift.
console.log(fruit);

console.log(fruit.reverse()); //Reverse an array.

// create the array ogf 5 number
let arr = [1, 2, 3, 4, 5, 6, 7, 8];
arr.splice(3, 2); //Use splice to remove elements.
console.log(arr);

arr.splice(2, 3, "apple", "baana"); //Use splice to insert elements.
console.log(arr);

console.log(arr.includes(3)); //Check if array contains a value.

let arr2 = [1, 2, 3, 4, 5];
console.log(arr2.join(".")); //Join array elements with .

//                           Copy array using spread operator.
let array1 = [10, 20, 30, 40, 50];
let numbername = [...array1];
numbername.pop();
console.log(numbername);
console.log(array1);

var arr = [11, 12, 13, 14, 15]; //Use forEach to print all numbers doubled.
arr.forEach(function (elem) {
  console.log(elem * 2);
});

var square = arr.map(function (element, index) {
  //Use map to square all numbers.
  return element * element;
});
console.log(square);

var evenodd = arr.filter(function (element, index) {
  //Use filter to get even numbers.
  return element % 2 == 0;
});
console.log(evenodd);

var total = arr.reduce((acc, val) => {
  //Use reduce to calculate sum.
  return acc + val;
}, 0);
console.log(total);

var arr = [25, 23, 105, 45, 56];
var maximum = arr.reduce(function (acc, val) {  //Use reduce to find maximum number.
  if (val > acc) {
    return val;
  } else {
    return acc;
  }
}, 0);
console.log(maximum);

arr.findIndex(function (element) {       //Use findindex to locate 105
  if (element === 105) {
    console.log("true");
  } else {
    console.log("false");
  }
});

var avg =
  arr.reduce(function (acc, val) {   //Calculate average using reduce.
    return acc + val;
  }, 0) / arr.length;
console.log(avg);

//                                         Create an array of 5 favorite movies and print all values.
let arr1 = ["kgf", "toxic", "96", "slumdog", "maarie"];
console.log(arr1[0]);
console.log(arr1[1]);
console.log(arr1[2]);
console.log(arr1[3]);
console.log(arr1[4]);
//             Create an array containing numbers, strings, boolean, and another array. Print only the nested array value.
let arr2 = ["hello", 120, true, ["this", "is", "another", "array"]];
console.log(arr2[0]);
console.log(arr2[1]);
console.log(arr2[2]);
console.log(arr2[3]);

// Print the first and last element of an array.
console.log(arr2[0]);
console.log(arr2[arr2.length - 1]);

let arr3 = [25, 23, 105, 45, 56];
arr3.sort(); //largest to smallest
console.log(arr3);

arr3.sort(function (a, b) {
  //smallest to largerst
  return a - b;
});
console.log(arr3);

let table1 = [1, 2, 4]; //concat
let table2 = [12, , 3];
console.log(table1.concat(table2));

let table3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let half = table3.length / 2;
let firsthalf = table3.slice(0, half).reverse();
let secondhalf = table3.slice(half);

console.log(firsthalf.concat(secondhalf));
