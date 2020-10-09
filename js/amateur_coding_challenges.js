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

//6 COMPLETE

// function age(birthdate){
//     let currentDate = ["10","09","2020"];
//     let arr = birthdate.split("/");
//     let numberCurrent = [Number(currentDate[0]), Number(currentDate[1]), Number(currentDate[2]),];
//     let numberArr = [Number(arr[0]), Number(arr[1]), Number(arr[2]),]
//     let monthDifference = numberCurrent[0] - numberArr[0];
//     let dayDifference = numberCurrent[1] - numberArr[1];
//     let yearDifference = numberCurrent[2] - numberArr[2];
//     let ageArr = [];
//     let dayCount;
//     if(dayDifference > 0){
//         ageArr.push(" and " + dayDifference + " days old!")
//     } else if(dayDifference === 0){
//         ageArr.push("old!")
//     } else {
//         monthDifference -= 1;
//         ageArr.push("and " + (30 + Number(dayDifference)) + " days old!")
//     }
//     if(monthDifference > 1){
//         ageArr.unshift(monthDifference + " months");
//     } else if(monthDifference === 1){
//         ageArr.unshift("and " + monthDifference + " month");
//     } else if(monthDifference < 0){
//         yearDifference -= 1;
//         ageArr.unshift("and " + 12 + monthDifference + " months")
//     }
//     if(yearDifference > 0) {
//         if (dayDifference === 0) {
//             ageArr.unshift("Anyone born on " + birthdate + " is " + yearDifference + " years")
//         } else if (monthDifference === 0) {
//             ageArr.unshift("Anyone born on " + birthdate + " is " + yearDifference + " years")
//         } else {
//             ageArr.unshift("Anyone born on " + birthdate + " is " + yearDifference + " years")
//         }
//     }
//     var agePhrase = ageArr.join(" ")
//     return agePhrase;
// }
//
// console.log(age("05 / 31 / 1990"));

//7 COMPLETE

// function stringToArray(string){
//     return string.split(" ")
// }
// console.log(stringToArray("Trick or Treat"));
//Input: "Trick or Treat"
// Output: [‘Trick’, ‘or’, ‘Treat’]

//8 COMPLETE

// function substringCount(stringOne, stringTwo){
//     var arr = stringOne.split(" ");
//     var charAt = 0;
//     arr.forEach(function(string){
//         if(string.toLowerCase() === stringTwo.toLowerCase()){
//             charAt += 1;
//         }
//     })
//     return charAt
// }
//
// console.log(substringCount("The pumpkin rolled down the hill and under someone’s car.", "the"));
//Input: "The pumpkin rolled down the hill and under someone’s car.", "the"
//Output: 2

//9

// function removeCharacters(string){
//     var arr = string.split("");
//     var charArr = ['~','!','$','&','%',' ','#','@','-','_','^','?',"'"];
//     var newArr = [];
//     for(var i = 0; i < arr.length; i++){
//         for(var j = 0; j < charArr.length; j++)
//        if(!(charArr.includes(arr[i]))){
//            newArr.push(arr[i])
//        }
//     }
//     return newArr
// }
//
// console.log(removeCharacters("Happy ~!&$%#@- Halloween"))
// console.log(removeCharacters("I’ll bet living in a nudist-colony takes all the fun out of Halloween!!"))

// Input: "Happy ~!&$%#@- Halloween" | Output: "HappyHalloween"
// Input: "I’ll bet living in a nudist-colony takes all the fun out of Halloween!!" | Output: "IllbetlivinginanudistcolonytakesallthefunoutofHalloween"

//10 COMPLETE

// function multiply(numberOne, numberTwo){
//     var output = 0;
//     if(numberOne < 0 && numberTwo < 0){
//         numberOne = numberOne - numberOne - numberOne
//     }
//     if(numberTwo < 0){
//         numberTwo = numberTwo - numberTwo - numberTwo
//     }
//     for(var i = 0; i < numberTwo; i++){
//         output += numberOne
//     }
//     return output
// }
//
// console.log(multiply(5, 6));
// console.log(multiply(-1, 15));
// console.log(multiply(-2, -7));

//11 COMPLETE

// function sameCase(input){
//     if(input.toLowerCase() === input || input.toUpperCase() === input){
//         return true
//     } else {
//         return false
//     }
// }
//
// console.log(sameCase("hello world"));
// console.log(sameCase("HELLO WORLD"));
// console.log(sameCase("HeLLo wORld"));

12//

function sumArray(array){
    var arr = [array[0]];
    for(var i = 1; i <= array.length; i++){
        var charAt = Number(array[i]);
        for(var j = 0; j < array.length; j++){
            if(typeof array[j])
            var charOth = charAt + Number(array[j])
            arr.push(charOth)
        }
    }
    return arr
}

console.log(sumArray([1, 1, 1]));//[1, 2, 3]
console.log(sumArray([4, 2, 1, 3, 5]));//[4, 6, 7, 10, 15]