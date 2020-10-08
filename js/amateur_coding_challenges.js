"use strict";

//1 COMPLETE
// function sum(start, finish, step){
//     var sum = 0;
//     for(var i = start; i <= finish; i += step){
//         sum += i;
//     }
//     return sum
// }
//
// console.log(sum(1, 4, 1));
// console.log(sum(4, 10, 5));

//2 COMPLETE

// function containsEnglish(string){
//     var newStr = string.toLowerCase();
//     var word = "english"
//     return newStr.includes(word);
// }
//
// console.log(containsEnglish("FaagdnglishAGG"));
// console.log(containsEnglish("SMFENglishasnD"));

//3 COMPLETE

// function positiveAndNegative(array){
//     var neg = 0;
//     var pos = 0;
//     var arr = [];
//     if(array === undefined){
//         return arr
//     }
//     array.forEach(function(number){
//         if(number < 0){
//             neg += number
//         } else {
//             pos += 1
//         }
//     })
//     arr.push(pos);
//     arr.push(neg);
//     return arr
// }
//
// console.log(positiveAndNegative([1, -6, 5, 4, 3, -7, -10, 201, -3]));
// console.log(positiveAndNegative());

//4 COMPLETE

// function replaceLettersWithNumbers(input, character){
//     var arr = input.split("")
//     var newArr = [];
//     for(var i = 0; i < arr.length; i++){
//         var charAt = 0;
//         for(var j = 0; j < arr.length; j++){
//             if(arr[i] === arr[j]){
//                 charAt += 1;
//             }
//         }
//         newArr.push(charAt)
//     }
//     var newStr = newArr.join(character)
//     return newStr
// }
//
// console.log(replaceLettersWithNumbers("hello world", "-"));//expects "1-1-3-3-2-1-1-2-1-3-1"
// console.log(replaceLettersWithNumbers("challenge", "/"));//expects "1/1/1/2/2/2/1/1/2"

//5 COMPLETE
function sortNames(string){
    var arr = string.split(";")
    var newArray = [];
    var finalArray = [];
    for(var i =0; i < arr.length; i++){
        var charAt = arr[i].toUpperCase();
        newArray.push(charAt.split(":"))
    }
    var lastArray = []
    for(var j = 0; j < newArray.length; j++){
        lastArray.push(newArray[j].pop())
        lastArray.push(newArray[j].shift())
    }
    for(var k = 0; k < lastArray.length + 2; k++){
        var charAt = lastArray.splice(0,2)
        charAt.join(', ')
        finalArray.push(charAt)
    }
    finalArray.sort();
    var finalStr = finalArray.join(") (")
    var omgArray = finalStr.split(" ")
    omgArray.unshift('(')
    omgArray.push(")")
    var omgStr = omgArray.join("")
    return omgStr
}

console.log(sortNames("Travis:Meyer;Gene:Carangal;Tom:Young;Jeff:Meyer"));