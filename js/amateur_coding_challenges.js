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
// function sortNames(string){
//     var arr = string.split(";")
//     var newArray = [];
//     var finalArray = [];
//     for(var i =0; i < arr.length; i++){
//         var charAt = arr[i].toUpperCase();
//         newArray.push(charAt.split(":"))
//     }
//     var lastArray = []
//     for(var j = 0; j < newArray.length; j++){
//         lastArray.push(newArray[j].pop())
//         lastArray.push(newArray[j].shift())
//     }
//     for(var k = 0; k < lastArray.length + 2; k++){
//         var charAt = lastArray.splice(0,2)
//         charAt.join(', ')
//         finalArray.push(charAt)
//     }
//     finalArray.sort();
//     var finalStr = finalArray.join(") (")
//     var omgArray = finalStr.split(" ")
//     omgArray.unshift('(')
//     omgArray.push(")")
//     var omgStr = omgArray.join("")
//     return omgStr
// }

// console.log(sortNames("Travis:Meyer;Gene:Carangal;Tom:Young;Jeff:Meyer"));

//6

function age(birthdate){
    let currentDate = ["08","07","2020"];
    let arr = birthdate.split("/");
    let numberCurrent = [Number(currentDate[0]), Number(currentDate[1]), Number(currentDate[2]),];
    let numberArr = [Number(arr[0]), Number(arr[1]), Number(arr[2]),]
    let monthDifference = numberCurrent[0] - numberArr[0];
    let dayDifference = numberCurrent[1] - numberArr[1];
    let yearDifference = numberCurrent[2] - numberArr[2];
    let ageArr = [];
    let newYear = 0;
    if(dayDifference > 0){
        ageArr.push(" and " + dayDifference + " days old!")
    } else {
        monthDifference -= 1;
        ageArr.push("and " + (30 + Number(dayDifference)) + " days old!")
    }
    if(monthDifference >= 0){
        ageArr.unshift(monthDifference + " month(s),");
    } else {
        yearDifference -= 1;
        ageArr.unshift(12 + monthDifference + " month(s),")
    }
    if(yearDifference > 0){
        ageArr.unshift("Anyone born on " + birthdate + " is " + yearDifference + " years,")
    }
    var agePhrase = ageArr.join(" ")
    return agePhrase;
}

console.log(age("08 / 07 / 1989"));
