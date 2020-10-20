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
//
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

//9 COMPLETE

// function removeCharacters(string){
//     var newArr = string.split("");
//     var charArr = ['~','!','$','&','%',' ','#','@','-','_','^','?','\''];
//     for(var i = 0; i < newArr.length; i++){
//         for(var j = 0; j < charArr.length; j++){
//             if(newArr.includes(charArr[i])){
//                 newArr.splice(newArr.indexOf(charArr[i]), 1)
//             }
//         }
//     }
//     var newStr = newArr.join("")
//     return newStr
// }
//
// console.log(removeCharacters("Happy ~!&$%#@- Halloween"))
// console.log(removeCharacters("I'll bet living in a nudist-colony takes all the fun out of Halloween!!"))

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

//12 COMPLETE

// function sumArray(array){
//   var newArr = [array[0]]
//   for(var i = 1; i < array.length; i++){
//       var previous =  newArr[i - 1];
//       newArr.push(array[i] + previous)
//   }
//   return newArr
// }
//
// console.log(sumArray([1, 1, 1]));//[1, 2, 3]
// console.log(sumArray([4, 2, 1, 3, 5]));//[4, 6, 7, 10, 15]

//13 COMPLETE

// function isogram(string){
//     var newArr = [];
//     var tOrF = true;
//     var strArr = string.split("");
//     for(var i = 0; i < strArr.length; i++){
//         if(newArr.includes(strArr[i])){
//             tOrF = false
//         } else {
//             newArr.push(strArr[i])
//         }
//     }
//     return tOrF;
// }
//
// console.log(isogram("fish"));//true
// console.log(isogram("food"));//false
// console.log(isogram("color"));//false

//14 COMPLETE

// function phoneNumber(string) {
//     var strArr = (string.toUpperCase()).split("");
//     var twoArr = ["A", "B", "C"];
//     for(var j = 0; j < strArr.length; j++) {
//         for (var i = 0; i < twoArr.length; i++) {
//             if (strArr.includes(twoArr[i])) {
//                 strArr.splice(strArr.indexOf(twoArr[i]), 1, "2")
//             }
//         }
//         var threeArr = ["D", "E", "F"];
//         for (var i = 0; i < threeArr.length; i++) {
//             if (strArr.includes(threeArr[i])) {
//                 strArr.splice(strArr.indexOf(threeArr[i]), 1, "3")
//             }
//         }
//         var fourArr = ["G", "H", "I"];
//         for (var i = 0; i < fourArr.length; i++) {
//             if (strArr.includes(fourArr[i])) {
//                 strArr.splice(strArr.indexOf(fourArr[i]), 1, "4")
//             }
//         }
//         var fiveArr = ["J", "K", "L"];
//         for (var i = 0; i < fiveArr.length; i++) {
//             if (strArr.includes(fiveArr[i])) {
//                 strArr.splice(strArr.indexOf(fiveArr[i]), 1, "5")
//             }
//         }
//         var sixArr = ["M", "N", "O"];
//         for (var i = 0; i < sixArr.length; i++) {
//             if (strArr.includes(sixArr[i])) {
//                 strArr.splice(strArr.indexOf(sixArr[i]), 1, "6")
//             }
//         }
//         var sevenArr = ["P", "Q", "R", "S"];
//         for (var i = 0; i < sevenArr.length; i++) {
//             if (strArr.includes(sevenArr[i])) {
//                 strArr.splice(strArr.indexOf(sevenArr[i]), 1, "7")
//             }
//         }
//         var eightArr = ["T", "U", "V"];
//         for (var i = 0; i < eightArr.length; i++) {
//             if (strArr.includes(eightArr[i])) {
//                 strArr.splice(strArr.indexOf(eightArr[i]), 1, "8")
//             }
//         }
//         var nineArr = ["W", "X", "Y", "Z"];
//         for (var i = 0; i < nineArr.length; i++) {
//             if (strArr.includes(nineArr[i])) {
//                 strArr.splice(strArr.indexOf(nineArr[i]), 1, "9")
//             }
//         }
//     }
//     var newStr = strArr.join("");
//     return newStr
// }
//
// console.log(phoneNumber("210-367-CODE"));//210-367-2633
// console.log(phoneNumber("TRY-THE-FOOD"));//879-843-3663

//PRIME NUMBERS TO number(1000)

// function primeNumbers(number) {
//     var primeArr = [];
//     for (var i = 2; i < number; i++) {
//         var newArr = [];
//         for (var j = 1; j <= i; j++) {
//             if (i % j === 0) {
//                 newArr.push(j)
//             }
//         }
//         if (newArr.length < 3) {
//             primeArr.push(i);
//         }
//     }
//     console.log("Prime numbers up to " + number + ": " + primeArr.length);
//     var primeStr = primeArr.join(",")
//     return primeStr
// }
//
// console.log(primeNumbers(100));

//15 COMPLETE

// function allSumArrays(array){
//     var finalArr = [];
//     for(var i = 1; i < array.length; i++) {
//             var secondArr = [];
//             var firstArr = [];
//             var thirdArr = [];
//             firstArr = array.slice(0, i);
//             secondArr.push(firstArr);
//             secondArr.push(array.slice(i, array.length));
//             thirdArr.push(secondArr);
//             finalArr.push(thirdArr);
//     }
//     return finalArr
// }
//
// console.log(allSumArrays([1, 5, 3, 2]));//[[[1], [5, 3, 2]], [[1, 5], [3, 2]], [[1, 5, 3], [2]]]
// console.log(allSumArrays(["a", "b", "c"]));//[[[a], [b, c]], [[a, b], [c]]]

//INTERMEDIATE

//1 COMPLETE

// function twoEqualTarget(array, number) {
//     var newArr = [];
//     for (var i = 0; i < array.length; i++) {
//         for (var j = 1; j < array.length; j++) {
//             if (Number(array[i]) + Number(array[j]) === number) {
//                 var first = array.indexOf(array[i])
//                 var second = array.indexOf(array[j])
//                 newArr.push(first);
//                 newArr.push(second);
//                 return newArr
//             }
//         }
//     }
// }
//
// console.log(twoEqualTarget([1, 4, 8, 12], 20));//[2, 3]

//2 COMPLETE

// function sortString(input) {
//     var arr = input.split("");
//     var newArr = [];
//     var arrTwo = [];
//     for (var i = 0; i < arr.length; i++) {
//         var charAt = 0;
//         for (var j = 0; j < arr.length; j++) {
//             if (arr[i] === arr[j]) {
//                 charAt += 1;
//             }
//         }
//         if (newArr.includes(arr[i])) {
//             newArr.splice(newArr.indexOf(arr[i]), 0, arr[i]);
//             arrTwo.splice(arrTwo.indexOf(charAt), 0, charAt);
//         } else {
//             if (charAt >= Math.max(...arrTwo)) {
//                 newArr.unshift(arr[i]);
//                 arrTwo.unshift(charAt);
//             } else if (charAt === 1) {
//                 newArr.push(arr[i]);
//                 arrTwo.push(charAt);
//             } else if(charAt > Math.min(...arrTwo)) {
//                 newArr.splice(arrTwo.indexOf(Math.min(...arrTwo) - 2), 0, arr[i]);
//                 arrTwo.splice(arrTwo.indexOf(Math.min(...arrTwo) - 2), 0, charAt);
//             } else {
//                 newArr.push(arr[i])
//                 arrTwo.push(charAt)
//             }
//         }
//     }
//     var finalStr = newArr.join("");
//     return finalStr
// }
//
// console.log(sortString("bee"));//"eeb"
// console.log(sortString("ldjfhgiiidgshjdllleidksj"));//"aaabbAcd"

//3 INCOMPLETE

//4 INCOMPLETE

//5 COMPLETE

// function divide(numberOne, numberTwo){
//     var output = 0;
//     var div = 0;
//     if(numberOne > 0 && numberTwo > 0){
//         for(var i = 0; i < numberOne; i++){
//             if(numberTwo === numberOne){
//                 return 1
//             } else if(output === numberOne){
//                 return div
//             } else if(numberTwo < numberOne){
//                 output += numberTwo
//                 div += 1
//             }
//         }
//     }
//     if(numberOne < 0 && numberTwo < 0){
//         numberOne = numberOne - numberOne - numberOne
//         numberTwo = numberTwo - numberTwo - numberTwo
//         for(var i = 0; i < numberOne; i++){
//             if(numberTwo === numberOne){
//                 return 1
//             } else if(output === numberOne){
//                 return div
//             } else if(numberTwo < numberOne){
//                 output += numberTwo
//                 div += 1
//             }
//         }
//     }
//     if(numberTwo < 0){
//         numberTwo = numberTwo - numberTwo - numberTwo
//         for(var i = 0; i < numberOne; i++){
//             if(numberTwo === numberOne){
//                 return 1
//             } else if(output === numberOne){
//                 return div
//             } else if(numberTwo < numberOne){
//                 output += numberTwo
//                 div -= 1
//             }
//         }
//     }
//     if(numberOne < 0){
//         numberOne = numberOne - numberOne - numberOne
//         for(var i = 0; i < numberOne; i++){
//             if(numberTwo === numberOne){
//                 return 1
//             } else if(output === numberOne){
//                 return div
//             } else if(numberTwo < numberOne){
//                 output += numberTwo
//                 div -= 1
//             }
//         }
//     }
//     return output
// }
//
// console.log(divide(-12, 2));//-6
// console.log(divide(-144, -12));//12
// console.log(divide(-50, 10));//-5

//6 COMPLETE

// function romanNumerals(numeral){
//     var letterArray = ['I','V','X','L','C','D','M'];
//     var numberArray = [1,5,10,50,100,500,1000];
//     var inputArray = numeral.split("");
//     var output = 0;
//     for(var i = 0; i < inputArray.length; i++) {
//         if(inputArray.indexOf(inputArray[i]) === inputArray.length - 1){
//             output += numberArray[letterArray.indexOf(inputArray[i])];
//             // console.log(inputArray.indexOf(inputArray[i]) + "made it to 1st if: output +=")
//         } else if (numberArray[inputArray[i]] >= numberArray[inputArray[i + 1]]) {
//             output += numberArray[letterArray.indexOf(inputArray[i])];
//             // console.log(inputArray.indexOf(inputArray[i]) + "made it to 2nd if: output +=")
//         } else if (numberArray[letterArray.indexOf(inputArray[i])] < numberArray[letterArray.indexOf(inputArray[i + 1])]) {
//             output -= numberArray[letterArray.indexOf(inputArray[i])];
//             // console.log(inputArray.indexOf(inputArray[i]) + "made it to 3rd if: output -=")
//         } else {
//             output += numberArray[letterArray.indexOf(inputArray[i])];
//             // console.log(inputArray.indexOf(inputArray[i]) + "made it to 4th if: output +=")
//         }
//     }
//     return output
// }
//
// console.log(romanNumerals('XXIV'));//24
// console.log(romanNumerals('MCMXII'));//1912
// console.log(romanNumerals('MMXX'));//2020
// console.log(romanNumerals('IV'));//4
// console.log(romanNumerals('MDCCCLXVIII'));//1868
// console.log(romanNumerals('MCMLXXXVIII'));//1988

//7 INCOMPLETE

//8 INCOMPLETE

// function nextNumber(number){
//     var str = number.toString()
//     var arr = [];
//     var finalArr = [];
//     for(var i = 0; i < str.length; i++){
//         arr.push(str.slice(str[i], 1))
//         for(var j = 1; j < str.length; j++){
//             if(!(arr.includes(str[j]))){
//                 arr.push(str.slice(str[j], 1))
//             }
//         }
//         for(var k = str.length; k >= 0; k--){
//             if(!(arr.includes(str[k]))){
//                 arr.push(str.slice(str[k], 1))
//             }
//         }
//         finalArr.push(Number(arr.join("")))
//     }
//     return finalArr
// }
//
// console.log(nextNumber(230));//302

//9 COMPLETE

// function numDivByLet(string){
//     var charArr = ['~','!','$','&','%',' ','#','@','-','_','^','?','\'']
//     var arr = string.split("");
//     var charAt = 0;
//     var numAt = 0;
//     for(var i = 0; i < arr.length; i++){
//         if(isNaN(arr[i]) && !(charArr.includes(arr[i]))){
//             charAt += 1
//         } else if(!(isNaN(arr[i]))){
//             numAt += Number(arr[i])
//         }
//     }
//     return numAt / charAt
// }
//
// console.log(numDivByLet("H3llo fr13nd9"));//2
// console.log(numDivByLet("Wha7 1n 7h3 w0r1d 4r3 y0u d01ng1?"));//2

//10 COMPLETE

// function password(string){
//     if((string.toLowerCase()).includes("password")){
//         return false
//     } else if(string.length < 7 || string.length > 21){
//         return false
//     }
//     var puncArr = ['~','!','$','&','%',' ','#','@','-','_','^','?','\'','.',',',';',':']
//     var upper = 0;
//     var num = 0;
//     var mark = 0;
//     for(var i = 0; i < string.length; i++) {
//         if (!(isNaN(string[i]))) {
//             num += 1
//         } else {
//             if (puncArr.includes(string[i])) {
//                 mark += 1
//                 // console.log("mark");
//             } else if (string[i] === string[i].toUpperCase()) {
//                 upper += 1
//             }
//         }
//     }
//     if(upper >= 1 && num >= 1 && mark >= 1){
//         return true
//     } else {
//         return false
//     }
// }
//
// console.log(password("passWord101!"));//false
// console.log(password("codE35?"));//true
// console.log(password("2!Shrt"));//false
// console.log(password("code35?"));//false
// console.log(password("code350"));//false
// console.log(password("codytheDuck!"));//false
// console.log(password("Tmt1av59a1w9!"));//false

//11 COMPLETE

// function pokemonGO(pidgeys, candy){
//     var XP = 0;
//     for(pidgeys; pidgeys > 0; pidgeys--){
//         if(pidgeys > 0 && candy >= 12){
//             candy -= 11
//             XP += 500;
//         }
//     }
//     return XP
// }
//
// console.log(pokemonGO(2, 23));//1000

//12 INCOMPLETE

//13 INCOMPLETE

//14 COMPLETE

// function coordinates(inputA, inputB){
//     if(Math.floor(inputA) < -90 || Math.ceil(inputA) >= 90){
//         return false
//     }
//     if(Math.floor(inputB) < -180 || Math.ceil(inputB) >= 180){
//         return false
//     }
//     if(isNaN(inputB) || isNaN(inputA)){
//         return false
//     }
//     else {
//         return true
//     }
// }
//
// console.log(coordinates(24.78245, 23.64572));//true
// console.log(coordinates("2,-37J425.87", 874.123));//false

//15

// function binary(number){
//     var output = [];
//     var quotient = 0;
//     for(var i = 0; i < number; i++){
//         if(number % 2 === 0)
//     }
// }

//anagram COMPLETE

// function anagram(ana, gram){
//     if(ana.length !== gram.length){
//         return false
//     } else {
//         var anaArr = ana.split("");
//         var gramArr = gram.split("");
//         for (var i = 0; i < anaArr.length; i++) {
//             for (var j = 0; j < gramArr.length; j++) {
//                 if (anaArr[i] === gramArr[j]) {
//                     gramArr.splice(gramArr.indexOf(gramArr[j]), 1)
//                     break;
//                 }
//             }
//         }
//     }
//     if(gramArr.length === 0){
//         return true
//     } else {
//         return false
//     }
// }
//
// console.log(anagram("godod", "doggo"));
// console.log(anagram("yellow", "wolley"));
// console.log(anagram("hello", "holel"));
