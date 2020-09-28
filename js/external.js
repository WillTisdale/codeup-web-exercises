"use strict";

console.log("Hello from external Javascript");

alert("Welcome to my Website!")

var color = prompt("What is your favorite color?")

while(color === "" || color === null) {
    var color = prompt("What is your favorite color?")
}

alert("Great, " + color.toLowerCase() + " is my favorite color too!")

//Exercise 3 from previous lesson
//Part 1
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
//Total Price Calculation
var days = Number(daysLM) + Number(daysBB) + Number(daysH)
var price = 3
var total = days * price
//Response
alert("Great! Your entire purchase will be for $" + total.toFixed(2) + ". Thank you for your purchase!")

//Part 2
//Google
var google = prompt("How many hours did you work for Google?")

while(isNaN(google) || google === null) {
    alert("You must respond with a numeric value.")
    var google = prompt("How many hours did you work for Google?")
}
//Amazon
var amazon = prompt("How many hours did you work for Amazon?")

while(isNaN(amazon) || amazon === null) {
    alert("You must respond with a numeric value.")
    var amazon = prompt("How many hours did you work for Amazon?")
}
//Facebok
var facebook = prompt("How many hours did you work for Facebook?")

while(isNaN(facebook) || facebook === null) {
    alert("You must respond with a numeric value.")
    var facebook = prompt("How many hours did you work for Facebook?")
}
//Total Price Calculation
var priceG = 400
var priceA = 380
var priceF = 350
var totalP = (Number(google) * priceG) + (Number(amazon) * priceA) + (Number(facebook) * priceF)
//Response
alert("Great! You made $" + totalP.toFixed(2) + " for all of your hard work!")

//Part 3
var full = confirm("Is the class full?")

var schedule = confirm("Does the class conflict with your current schedule?")

if(full == true || schedule == true) {
    alert("You may not enroll in the class.")
}
else {
    alert("You may enroll in the class.")
}

//Part 4
var premium = confirm("Are you a premium member?")
    if(premium === true) {
        var expired = confirm("Is your offer expired?");
        if (expired === false) {
            alert("Congratulations, your product offer can be applied!");
        }
        else {
            alert("Your product offer has expired and may not be used.");
        }
    }
    if (premium === false) {
        var two = Number(prompt("How many items will you be purchasing?"));
            while(isNaN(two) || two === null) {
                alert("You must respond with a numeric value.")
                var two = Number(prompt("How many items will you be purchasing?"));
            }
            if(two > 2) {
                var expired = confirm("Is your offer expired?");
                if(expired === false) {
                    alert("Congratulations, your product offer can be applied!");
                }
                else {
                    alert("Your product offer has expired and may not be used.");
            }
        }
            else {
                alert("You do not qualify for the product offer.")
            }
}





