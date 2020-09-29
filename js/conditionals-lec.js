"use strict";

console.log("hello from conditionals lec.js!");

// ================ REAL WORLD SCENARIO ================
// If a user is an admin,show a specific navbar
// If weather is rainy, show rain icon
// If number of lives is 0, game is over


// ================ IF STATEMENT SYNTAX ================

// if(condition){
// code here runs if condition evaluates to true
// }


// ================ IF STATEMENT EXAMPLES ================
//TODO Together: Show a specific navbar if user is admin

//if(isAdmin){
    //show an admin navbar
//}

//TODO Together: Send a 20% off coupon if its users birthday

// if(isBirthday)  {
//     //send coupon
// }

//TODO Together: Write an if statement that alerts "It's raining" if isRainy is true

// var isRainy = true;
//
// if(isRainy){
//     alert("it's raining!")
// }

//TODO Together: Write an if statement that alerts the user whether or not they have enough money to buy a new item. Assume there are no hidden fees or taxes.

// var itemCost = 25;
// var currentBalance = 50;
//
// function purchase(x, y){
//     if(x > y){
//         alert("Sorry you do not have enough money");
//     }
//     else{
//         alert("Yay, you can buy this item!")
//     }
// }


//TODO: Write an if statement that alerts "Sorry, game over" if numberOfLives is 0

// var isZero = 0
// if(isZero <= 0){
//     alert("Sorry, game over")
// }

//TODO: Write an if statement that alerts "It's snowing!" if weather is equal to "snowing"

// var weather = "snowing"
// if(weather === "snowing"){
//     alert("It's snowing!")
// }
//TODO: Write an if statement that alerts true if numberInput is greater than but not equal to 10

// var numberInput = 11
// if(numberInput > 10){
//     alert("true")
// }


//TODO: EXTRA BONUS - Refactor each of the previous statements as functions.





// =============== IF / ELSE SYNTAX ================

// if(condition){
//     // code here runs if condition evaluates to true
// } else {
//     // code here runs if condition evaluates to false
// }



// =============== IF / ELSE STATEMENT EXAMPLES ================
//TODO Together: Show a specific navbar if user is admin, else show a different navbar

// var isAdmin = false;
//
// if(isAdmin){
//   //show the admin navbar
//     console.log("admin user");
// } else {
//     //show regular nav bar
//     console.log("regular user");
// }

//TODO Together: Write an if statement that alerts "It's raining" if isRainy is true, else return "have a nice day!"

// var isRainy = true;
//
// if(isRainy){
//     alert("It's raining.")
// } else {
//     alert("Have a nice day.")
// }


//TODO: Write an if statement that alerts "Sorry, game over" if numberOfLives is 0, else alert "Next Level!"

// var numberOfLives = 1;
//
// if(numberOfLives === 0){
//     alert("Sorry, game over.")
// } else {
//     alert("Next Level!")
// }

//TODO: Write an if statement that alerts "It's snowing!" if weather is equal to "snowing", else alert "Check back later for more details!"

// var weather = "clear";
//
// if(weather === "snowing"){
//     alert("It's snowing!")
// } else {
//     alert("Check back later for more details!")
// }
//TODO: Write an if statement that alerts true if numberInput is greater than 10, else alert "the number is less than 10"

// var numberInput = 11;
//
// if(numberInput > 10){
//     alert(numberInput + " is greater than 10")
// } else if (numberInput === 10) {
//     alert(numberInput + " is equal to 10")
// } else {
//     alert(numberInput + " is less than 10")
// }

//TODO: Refactor todo#1 as a function named checkIfGameIsOver, that accepts numberOfLives and returns "Sorry, game over" if numberOfLives is 0, else return "Next Level!.

// (function checkIfGameIsOver(x) {
//     if (x <= 0) {
//         alert("Sorry, game over.")
//     } else {
//         alert("Next Level!")
//     }
// })(0);


//TODO: EXTRA BONUS - Refactor todo#2 from above as a function.



// SHOULD WE DELETE STUFF EXAMPLE




//TODO: Write a confirm asking the user if they are 13 years of age or older. If they are, alert "You may proceed", if they are not, alert "Sorry, you are not able to proceed"

// var age = Number(confirm("Are you 13 years of age or older?"));
//
// if(age){
//     alert("You may proceed");
// } else {
//     alert("Sorry, you are not able to proceed");
// }

// ================ IF / ELSE IF / ELSE STATEMENT SYNTAX ===============
// if(condition1){
//     // code here runs if condition evaluates to true
// }else if (condition2){
//     // code here runs if condition1 is false *and* condition2 evaluates to true
// }else {
//     // code here gets executed if condition1 nor condition2 evaluate to true
// }



// =============== IF / ELSE IF/ELSE STATEMENT EXAMPLES ================
//TODO Together: Write an if/else if/else statement that alerts "It's snowing!" if weather is equal to "snowing", alerts "It's raining" if weather is equal to "raining", alerts "have a nice day" for all other cases

// var weather = "clear";
// function checkWeather(weather) {
//     if (weather === "snowing") {
//         return "It's snowing!";
//     } else if (weather === "raining") {
//         return "It's raining!";
//     } else {
//         return "Have a nice day!";
//     }
// }
//
// console.log(checkWeather("windy"));
// console.log(checkWeather("sunny"));
// console.log(checkWeather("snowing"));

//TODO Together: refactor the above statement as a function

// Together: PIZZA PREFERENCE EXAMPLE

// var pizzaPreference = prompt("What kind of pizza do you like?");
// console.log("User pizza input: " + pizzaPreference);
//
// if (pizzaPreference === "pineapple and hot sauce") {
//     alert("What a coincidence, that's my favorite!");
// } else if (pizzaPreference === "cheese") {
//     alert("Just plain cheese? Okay...");
// }  else if (pizzaPreference === "ham"){
//     alert("Ham is easy to spell and awesome!");
// } else {
//     alert(pizzaPreference + " isn't my favorite, but let's order some!");
// }




//TODO: Write a function that accepts a string that is a traffic light color as an input. When this function is called, it should return a message informing the user what to do when approaching that color light at an intersection.

// function trafficLight(lightColor){
//     if(lightColor === "red"){
//         return "STOP!!!";
//     } else if(lightColor === "yellow"){
//         return "Clear the INTERSECTION!"
//     } else if(lightColor === "green"){
//         return "Safe to continue but still look both ways"
//     } else {
//         return lightColor.toUpperCase() + " is not on a traffic light! Do you have a license?!"
//     }
// }
//
// console.log(trafficLight("red"));
// console.log(trafficLight("yellow"));
// console.log(trafficLight("green"));
// console.log(trafficLight("blue"));

// ================ NESTED STATEMENTS ===============
//TODO Together: If user is under 15, they are not eligible for a
// learners permit, else they are. If they are eligible, check age.
// If they are 15 they are eligible for a learners permit, if they
// are 16 or older and have a permit, they are eligible for license,
// if they are 16 or older and do not have a permit, they are not
// eligble for a license.

// var userAge = 16;
// var hasPermit = true;
//
// if(userAge < 15){
//     alert("Sorry, not eligible yet.");
// } else {
//     if(userAge === 15){
//         alert("You are eligible for a permit");
//     } else if(userAge >= 16 && hasPermit){
//         alert("You can get a license! Yay!");
//     } else if(userAge >= 16 && !hasPermit){
//         alert("You need to have a permit first.");
//     } else {
//         alert("Please call support!");
//     }
// }





// ================ TERNARY STATEMENT ================

//TODO Together: Regular way

// var message;
// var success = false;
//
// if (success) {
//     message = "Operation was successful.";
// } else {
//     message = "Oops, something went wrong.";
// }
// console.log(message);
//
//
// var success = false;
// var message = (success) ? "Operation was successful from tern." : "Oops, something went wrong from tern.";
// console.log(message)


//TODO: Refactor the following conditional as a ternary

// var weather = "sunny";
// var weatherMessage;

// if(weather === "rainy"){
//    weatherMessage = "It's raining!";
// } else {
//     weatherMessage = "Have a nice day!";
// }

//WRITE YOUR TERNARY STATEMENT HERE!

// var weather = "rainy";
// var weatherMessage = (weather === "rainy") ? "It's raining!" : "Have a nice day!";
// console.log(weatherMessage);

// =============== SWITCH STATEMENT ================
//TODO Together:

// var pizzaPreference = prompt("What kind of pizza do you like?");
//
// switch(pizzaPreference) {
//     case "pineapple and hot sauce":
//         alert("What a coincidence, that's my favorite!");
//         break;
//     case "cheese":
//         alert("Just plain cheese? Okay...");
//         break;
//     default:
//         alert(pizzaPreference + " isn't my favorite, but let's order some!");
//         break;
// }


//TODO: Write a switch statement that evaluates weather as the condition. Check for "rainy", "sunny", "snow", and a default case.

// switch(weather) {
//     case "rainy":
//
// }

//TODO: Rewrite the intersection function from earlier as a switch statement.



// ================ REVERSE ENGINEERING =================
// Visit each of these links, outline the steps required to achieve each of these demonstrations. You can write code or just write the logic steps that would achieve each output


// 1) https://mdn.github.io/learning-area/javascript/building-blocks/allowance-updater.html


// 2) https://mdn.github.io/learning-area/javascript/building-blocks/simple-else-if.html


// 3) https://mdn.github.io/learning-area/javascript/building-blocks/simple-ternary.html

