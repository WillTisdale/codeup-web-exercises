"use strict";

/* console.log("Hello, William!");
console.log("Hello, Johnny!");
console.log("Hello, Kelly!");
console.log("Hello, Clay!");
console.log("Hello, Daniel!");*/

// function helloName(name){
//     console.log("Hello " + name + "!");
//     //we will talk about returning later!
// }
//
// helloName("William");
// helloName("Johnny");
// helloName("Kelly");
// helloName("Clay");
// helloName("Daniel");

// function allTheSame(input){
//     if(input.toLowerCase() === input || input.toUpperCase() === input){
//         return true
//     } else {
//         return false
//     }
// }
//
// console.log(allTheSame("hello world"))
// console.log(allTheSame("HELLO WORLD"))
// console.log(allTheSame("HeLLo wORld"))

// TODO: the following function writing challenges are already written... incorrectly. Fix them!

/**
 * Write a function that takes in an array of elements and adds any number threes in the array. Numeric strings should not be added.
 *
 * Example Input: ['a', 3, '3', 3, null]
 * Example Output: 6
 */
// function sum3s(numbers) {
//     var output = 0;
//     numbers.forEach(function(number) {
//         if (number === 3) {
//             output += 3;
//         }
//     });
//     return output;
// }
//
// console.log(sum3s(['a', 3, '3', 3, null])); // should see 6 in the console when written correctly

/**
 * OPTIONAL EXTRA CHALLENGE!!
 * Write a function that takes in an array of strings and returns an array of the same string values but uppercased.
 *
 * Example Input: ['a', 'cat', 'BOb'];
 * Example Output: ['A', 'CAT', 'BOB'];
 */
// function upCaseArr(arr) {
//     var newArray = [];
//     arr.forEach(function(element) {
//         newArray.push(element.toUpperCase());
//     });
//     return newArray;
// }
//
// console.log(upCaseArr(['a', 'cat', 'BOb'])); // should see ['A', 'CAT', 'BOB'] in the console when written correctly

function stringToArray(string){
    return string.split(" ")
}

console.log(stringToArray("Trick or Treat"));