$(document).ready(function(){
 "use strict";

 const puzzle = $('#puzzle')

 const puzzleString = puzzle.html()

 const puzzleArr = puzzleString.split('\n    ')

 console.log(puzzleArr);
 let start = 0
 let answer = 0;
 let num = 0
for(var i = 1; i < puzzleArr.length; i++){
 let current = puzzleArr[i];

   if(i % 2 === 0) {
    start += 1;
    if (start === 31) {
     start = 0
    }
    // console.log(i + " " + start);
    if (current[start] === "#") {
     console.log(i + " " + start)
     answer += 1;
    }
   }
}
 console.log(num);
 console.log(answer)



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


