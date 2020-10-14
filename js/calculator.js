"use strict";

var numOne = prompt("first number")
var operator = prompt("operator")
var numTwo = prompt("second number")

function calculator(numOne, operator, numTwo){
    switch (operator){
        case "C":
            var answer = 0
            return answer;
            break;
        case "+":
            var answer = alert(numOne + numTwo)
            return answer;
            break;
        case "-":
            var answer = alert(numOne - numTwo)
            return answer;
            break;
        case "*":
            var answer = alert(numOne * numTwo)
            return answer;
            break;
        case "/":
            var answer = alert(numOne / numTwo)
            return answer;
            break;

    }
}

console.log(calculator(numOne, operator, numTwo));