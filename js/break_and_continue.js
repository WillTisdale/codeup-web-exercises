"use strict";


var userNumber = prompt("Enter an odd number between 1 and 50");
while(userNumber % 2 === 0 || userNumber < 1 || userNumber > 50){
    var userNumber = prompt("Enter an odd number between 1 and 50");
}
console.log("Number to skip is: " + userNumber)

for(var i = 1; i < 50; i++){
    if(i == userNumber){
        console.log("Yikes! Skipping number: " + userNumber);
    } else if(i % 2 === 0) {
        continue;
    } else {
        console.log("Here is an odd number: " + i);
    }
}
