"use strict";

console.log("Hello from external Javascript");

alert("Welcome to my Website!")

var color = prompt("What is your favorite color?")

while(color === "" || color === null) {
    var color = prompt("What is your favorite color?")
}

alert("Great, " + color.toLowerCase() + " is my favorite color too!")

//Exercise 3 from prevous lesson
//Little Mermaid
var daysLM = prompt("How many days will you be renting Little Mermaid?")

while(isNaN(daysLM) || daysLM === null) {
    alert("You must respond with a numeric value.")
    var daysLM = prompt("How many days will you be renting Little Mermaid?")
}
//Brother Bear
var daysBB = prompt("How many days will you be renting Brother Bear?")

while(isNaN(daysBB) || daysLM === null) {
    alert("You must respond with a numeric value.")
    var daysBB = prompt("How many days will you be renting Brother Bear?")
}
//Hercules
var daysH = prompt("How many days will you be renting Hercules?")

while(isNaN(daysH) || daysLM === null) {
    alert("You must respond with a numeric value.")
    var daysH = prompt("How many days will you be renting Hercules?")
}

var days = Number(daysLM) + Number(daysBB) + Number(daysH)
var price = 3
var total = days * price
alert("Great! Your entire purchase will be for $" + total + ". Thank you for your purchase!")


