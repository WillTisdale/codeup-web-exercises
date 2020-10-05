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

function allTheSame(input){
    if(input.toLowerCase() === input || input.toUpperCase() === input){
        return true
    } else {
        return false
    }
}

console.log(allTheSame("hello world"))
console.log(allTheSame("HELLO WORLD"))
console.log(allTheSame("HeLLo wORld"))