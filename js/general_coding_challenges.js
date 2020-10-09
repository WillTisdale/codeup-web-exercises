"use strict";

//Narcissistic Numbers # 1 COMPLETE

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

//Narcissistic Numbers #2 COMPLETE

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

//Maximum Subsequence Sum COMPLETE

// function maxSubSum(arr) {
//     var newArray = [];
//    for(var i = 0; i < arr.length; i++){
//        var charAt = Number(arr[i])
//        for(var j = i + 1; j < arr.length; j++){
//            charAt += Number(arr[j])
//            newArray.push(charAt)
//        }
//    }
//    return Math.max(...newArray)
// }
// console.log(maxSubSum(['-2','-3','4','-1','-2','1','5','-3'])); //expects 7
// console.log(maxSubSum(['-7','1','-3','4','-1','2','1','-5','4'])); //expects 6

//Password Generator

//String Reversal COMPLETE
//
// function stringReversal(input){
//     var array = input.split("");
//     var newArray = [];
//     array.forEach(function (element){
//         newArray.unshift(element);
//     })
//     return newArray.join("")
// }
//
// console.log(stringReversal("12345"));

//Sum Up Those Digits COMPLETE

// function sumAllDigits(input){
//     var number = parseInt(input);
//     var string = number.toString();
//     var array = string.split("");
//     var sum = 0;
//     array.forEach(function(element){
//         sum += Number(element);
//     })
//     return sum;
// }
//
// console.log(sumAllDigits(12345));