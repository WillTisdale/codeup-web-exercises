"use strict";

//Math.random() creates a number between 0 and 1

let randomNum = Math.random() * 2;

console.log("Math.random() creates a random number: " + randomNum);

//Math.round() removes decimals to create a whole number

console.log("Math.round() rounds up or down: " + Math.round(randomNum));

//Math.floor() rounds down every time

console.log("Math.floor() rounds down: " + Math.floor(randomNum));

//Math.ceil

console.log("Math.ceil() rounds up: " + Math.ceil(randomNum));

//create random number between 74 and 186

console.log(Math.ceil(Math.random() * 113) + 73);
console.log(Math.floor(Math.random() * 113) + 74);

var ceilMethod = Math.ceil(Math.random() * 113) + 73
var floorMethod = Math.floor(Math.random() * 113) + 74

//loop to make sure you can reach both numbers 74 and 186
for(var i = 0; i < 500; i++){
    var floorMethod = Math.floor(Math.random() * 113) + 74
    if(floorMethod === 74){
        console.log("floorMethod has reached 74!")
    } else if(floorMethod === 186){
        console.log("floorMethod has reached 186!")
    }
}

for(var i = 0; i < 500; i++){
    var ceilMethod = Math.ceil(Math.random() * 113) + 73
    if(ceilMethod === 74){
        console.log("ceilMethod has reached 74!")
    } else if(ceilMethod === 186){
        console.log("ceilMethod has reached 186!")
    }
}

//Math.pow() raises one number to the power of another number

var exponentResult = Math.pow(4,2)

console.log(exponentResult);

var base = 8;
var exponent = 10;
var result = base;
for(var i = 1; i < exponent; i++){
    result *= base
}
console.log(result);

//Math.sqrt() finds the square root of a number
base = 81
result = Math.sqrt(base)
console.log("The square root of " + base + " = " + result);

//Math.PI = pi and can be used for circumference and area of circles
//Math.E is approximately equal to 2.718

