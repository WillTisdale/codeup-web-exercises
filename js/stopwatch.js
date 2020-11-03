"use strict";
var timer = document.getElementById('timer')
var count = 1
var intervalId;
var timeArr = [0,59,55]

var start = document.getElementById("start")
start.addEventListener('click', startTimer)
function startTimer(){
    console.log("start");
    intervalId = setInterval(function (){
        if(timeArr[2] > 59){
            timeArr[1] += count
            timeArr[2] = 0
        }
        if(timeArr[1] > 59){
            timeArr[0] += count
            timeArr[1] = 0
            timeArr[2] = 0
        }
        timer.innerHTML = timeArr.join(':')
        timeArr[2] += count
    },1000)
}

var pause = document.getElementById("pause")
pause.addEventListener('click', pauseTimer)
function pauseTimer(){
    console.log('pause');
    clearInterval(intervalId)
}

var reset = document.getElementById("reset")
reset.addEventListener('click', resetTimer)
function resetTimer(){
    console.log('reset');
    clearInterval(intervalId)
    timeArr = [0,0,0]
    timer.innerHTML = timeArr.join(':')
}
