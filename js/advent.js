$(document).ready(function(){
 "use strict";

 const puzzle = $('#puzzle')

 let puzzleString = puzzle.html()

 // console.log(puzzleString);

 const puzzleArr = puzzleString.split('\n    ')

 // console.log(puzzleArr);

 let newString = puzzleArr.join(' ')

 let newArray = newString.split('\n')

 // console.log(newString);
 //
 // console.log(newArray);


 let bigArray = [];
 for(var i = 0; i < newArray.length; i++){
  let string = newArray[i].split(" ")
  bigArray.push(string)
 }

 let newBigArray =[]

 bigArray.forEach(function(array){
  let eightArr = array.filter(n => n !== "")
  newBigArray.push(eightArr)
 })

 let lastFilter = newBigArray.filter(n => n.length >= 7)

 let hasEight = lastFilter.filter(n => n.length === 8)
 let hasSeven = lastFilter.filter(n => n.length === 7)

 let answer = 0
 let badIndex = []

 hasSeven.forEach(function(array){
  for(var i = 0; i < array.length; i++){
   if(array[i].startsWith("cid")){
    badIndex.push(array)
    answer += 1;
   }
  }
 })

for(var i = 0; i < badIndex.length; i ++){
 hasSeven.splice(hasSeven.indexOf(badIndex[i]), 1)
}
 // console.log(hasEight);
 // console.log(hasSeven);

 function checkBYR(array){
  array.forEach(function (field){
   if(field.startsWith("byr")){
    let byr = field.split(":");
    let year = Number(byr[1])
    if(year >= 1920 && year <= 2002){
     array.splice(array.indexOf(field), 1, "valid")
    } else {
     array.splice(array.indexOf(field), 1, "invalid")
    }
   }
  })
 }
 function checkIYR(array){
  array.forEach(function (field){
   if(field.startsWith("iyr")){
    let iyr = field.split(":");
    let year = Number(iyr[1])
    if(year >= 2010 && year <= 2020){
     array.splice(array.indexOf(field), 1, "valid")
    } else {
     array.splice(array.indexOf(field), 1, "invalid")
    }
   }
  })
 }
 function checkEYR(array){
  array.forEach(function (field){
   if(field.startsWith("eyr")){
    let eyr = field.split(":");
    let year = Number(eyr[1])
    if(year >= 2020 && year <= 2030){
     array.splice(array.indexOf(field), 1, "valid")
    } else {
     array.splice(array.indexOf(field), 1, "invalid")
    }
   }
  })
 }
 function checkHGT(array){
  array.forEach(function (field){
   if(field.startsWith("hgt")){
    let hgt = field.split(":");
    let height = hgt[1].split("")
    for(var i = 0; i < height.length; i++){
     if(!isNaN(parseFloat(height[i]))){
       height[i] = parseFloat(height[i])
     }
    }
    for(var j = 0; j < height.length; j++){
     if(typeof height[i] != "number"){
      let current = height[i]
      height.splice(height.indexOf(height[i]) - 1, 0, ":")
      break;
     }
    }
    let newStr = height.join("")
    let hgtArr = newStr.split(":")
    let number = Number(hgtArr[0])
    let msmt = hgtArr[1]
    if(msmt === "cm") {
     if (number >= 150 && number <= 193) {
      array.splice(array.indexOf(field), 1, "valid")
     } else {
      array.splice(array.indexOf(field), 1, "invalid")
     }
    } else if(msmt = "in"){
     if (number >= 59 && number <= 76) {
      array.splice(array.indexOf(field), 1, "valid")
     } else {
      array.splice(array.indexOf(field), 1, "invalid")
     }
    } else {
     array.splice(array.indexOf(field), 1, "invalid")
    }
   }
  })
 }
 function checkCID(array){
  array.forEach(function (field){
   if(field.startsWith("cid")){
     array.splice(array.indexOf(field), 1, "valid")
    }
  })
 }
 function checkHCL(array){
 let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  let letters = ["a", "b", "c", "d", "e", "f"]
  array.forEach(function (field){
   if(field.startsWith("hcl")){
    let hcl = field.split(":");
    let color = hcl[1]
    let colorArr = color.split("")
    if(colorArr.length !== 7){
     array.splice(array.indexOf(field), 1, "invalid")
    } else {
     if(colorArr[0] === "#"){
      let count = 0;
      for(var i = 1; i < colorArr.length; i++){
       if(numbers.includes(colorArr[i]) || letters.includes(colorArr[i])){
         count += 1;
       }
      }
      if(count === 6){
       array.splice(array.indexOf(field), 1, "valid")
      } else {
       array.splice(array.indexOf(field), 1, "invalid")
      }
     } else {
      array.splice(array.indexOf(field), 1, "invalid")
     }
    }

   }
  })
 }
 function checkECL(array){
 let colors = ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"]
  array.forEach(function (field){
   if(field.startsWith("ecl")){
    let ecl = field.split(":");
    let color = ecl[1]
    if(colors.includes(color)){
     array.splice(array.indexOf(field), 1, "valid")
    }else{
     array.splice(array.indexOf(field), 1, "invalid")
    }
   }
  })
 }
 function checkPID(array){
  array.forEach(function (field){
   if(field.startsWith("pid")){
    let pid = field.split(":");
    let number = pid[1]
    if(number.length === 9){
     array.splice(array.indexOf(field), 1, "valid")
    } else {
     array.splice(array.indexOf(field), 1, "invalid")
    }
   }
  })
 }

 hasEight.forEach(function(array){
  checkBYR(array);
  checkIYR(array)
  checkEYR(array)
  checkHGT(array)
  checkCID(array)
  checkHCL(array)
  checkECL(array)
  checkPID(array)
 })
 hasSeven.forEach(function(array){
  checkBYR(array);
  checkIYR(array)
  checkEYR(array)
  checkHGT(array)
  checkHCL(array)
  checkECL(array)
  checkPID(array)
 })
 let valid = 0;
 let invalid = 0;
 hasEight.forEach(function(array){
  if (array.includes("invalid")){
   invalid += 1
  } else {
   valid += 1
  }
 })
 hasSeven.forEach(function(array){
  if (array.includes("invalid")){
   invalid += 1
  } else {
   valid += 1
  }
 })
 console.log("Valid passports: " + valid);
 console.log("Invalid passports: " + invalid);
 // 2*l*w + 2*w*h + 2*h*l
//  let total = 0;
// for(var i = 0; i < puzzleArr.length; i++){
//  let eachArr = puzzleArr[i].split("x")
//  let numArr = eachArr.map(n => Number(n))
//  let l = numArr[0]
//  let w = numArr[1]
//  let h = numArr[2]
//  // total += (2*l*w + 2*w*h + 2*h*l)
//  if(Math.max(...numArr) === l){
//   total += w+w+h+h
//   total += l*w*h
//   continue;
//  }
//  if(Math.max(...numArr) === w){
//   total += l+l+h+h
//   total += l*w*h
//   continue;
//  }
//  if(Math.max(...numArr) === h){
//   total += l+l+w+w
//   total += l*w*h
//   continue;
//  }
// }
//
//  console.log(total);

 // let floor = 0;
 // for(var i = 0; i < puzzleArr.length; i++){
 //  if(puzzleArr[i] === ")"){
 //   floor -= 1
 //  }
 //  if(puzzleArr[i] === "("){
 //   floor += 1
 //  }
 //  if(floor === -1){
 //   console.log(i + 1)
 //   break;
 //  }
 // }

 // console.log(floor);

//  let start = 0
//  let answer = 0;
//  let num = 0
// for(var i = 1; i < puzzleArr.length; i++){
//  let current = puzzleArr[i];
//     start += 1;
//     if (start === 31) {
//      start = 0
//     }
//     if (current[start] === "#") {
//      answer += 1;
//     }
// }
//  console.log(num);
//  console.log(answer)



 // let argArr = [];
 //
 //  for (let i = 0; i < puzzleArr.length; i++) {
 //    let initialArr = []
 //    let newArray = puzzleArr[i].split(":")
 //    let inputFour = newArray[1].slice(1)
 //    let firstArr = newArray[0].split(" ")
 //    let inputThree = firstArr[1]
 //    let secondArr = firstArr[0].split("-")
 //    let inputOne = secondArr[0]
 //    let inputTwo = secondArr[1]
 //    initialArr.push(inputOne)
 //    initialArr.push(inputTwo)
 //    initialArr.push(inputThree)
 //    initialArr.push(inputFour)
 //    argArr.push(initialArr)
 //  }
 //
 //   let answer = [];
 //   argArr.forEach(function(array) {
 //    let count = 0
 //    let min = Number(array[0]) - 1
 //    let max = Number(array[1]) - 1
 //    let key = array[2]
 //    let string = array[3].split("")
 //    if(string[min] === key){
 //     count += 1
 //    }
 //    if(string[max] === key){
 //     count += 1
 //    }
 //    if(count === 1){
 //     answer.push(array)
 //    }
 //   })
 // console.log(answer.length);


 // let newArr = numArr.map( n => Number(n))
 //
 // // console.log(newArr);
 //
 // function twoEqualTarget(array, number) {
 //  var newArr = [];
 //  for (var i = 0; i < array.length; i++) {
 //   for (var j = 1; j < array.length; j++) {
 //    for (var k = 1; k < array.length; k++) {
 //    if (Number(array[i]) + Number(array[j]) + Number(array[k]) === number) {
 //     var first = Number(array[i])
 //     var second = Number(array[j])
 //     var third = Number(array[k])
 //     var fourth = first + second + third
 //     var fifth = first * second * third
 //     newArr.push(first);
 //     newArr.push(second);
 //     newArr.push(third);
 //     newArr.push(fourth);
 //     newArr.push(fifth);
 //     return newArr
 //    }
 //    }
 //   }
 //  }
 // }
 //
 // console.log(twoEqualTarget(numArr, 2020));//[2, 3]


})


