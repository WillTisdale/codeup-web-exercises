"use strict";

//Narcissistic Numbers # 1

// for(var i = 0; i < 10e6; i++){
//     var iString = i.toString()
//     if(iString.length === 1){
//         if(iString[0]**1 === i){
//             console.log(i);
//         }
//     }
//     if(iString.length === 2){
//         if(((iString[0]**2) + (iString[1]**2)) === i){
//             console.log(i);
//         }
//     }
//     if(iString.length === 3){
//         if(((iString[0]**3) + (iString[1]**3) + (iString[2]**3)) === i) {
//             console.log(i);
//         }
//     }
//     if(iString.length === 4){
//         if(((iString[0]**4) + (iString[1]**4) + (iString[2]**4) + (iString[3]**4)) === i) {
//             console.log(i);
//         }
//     }
//     if(iString.length === 5){
//         if(((iString[0]**5) + (iString[1]**5) + (iString[2]**5) + (iString[3]**5) + (iString[4]**5)) === i) {
//             console.log(i);
//         }
//     }
//     if(iString.length === 6){
//         if(((iString[0]**6) + (iString[1]**6) + (iString[2]**6) + (iString[3]**6) + (iString[4]**6) + (iString[5]**6)) === i) {
//             console.log(i);
//         }
//     }
//     if(iString.length === 7){
//         if(((iString[0]**7) + (iString[1]**7) + (iString[2]**7) + (iString[3]**7) + (iString[4]**7) + (iString[5]**7) + (iString[6]**7)) === i) {
//             console.log(i);
//         }
//     }
// }

//Narcissistic Numbers #2

// for(var i = 0; i < 10e6; i++){
//     var iString = i.toString();
//     var narcNum = 0
//     var iArray = iString.split("");
//     iArray.forEach(function(number){
//         narcNum += number**iString.length
//     })
//     if(narcNum === i) {
//         console.log(i);
//     }
// }

//Maximum Subsequence Sum
var array = ['-2','-3','4','-1','-2','1','5','-3']
function maxSubSum(arr){
    var sum = 0;
    arr.forEach(function(element){
        sum += Number(element);
    })
    return sum;
}

console.log(maxSubSum(array));

//Password Generator

//String Reversal

// function stringReversal(input){
//     var length = input.length
//     return input[length]
// }
//
// stringReversal()

//Sum Up Those Digits

// function sumAllDigits(input){
//     var array = ("" + input).split("");
//     return array[0]
// }
//
// console.log(sumAllDigits(12345));