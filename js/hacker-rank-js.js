"use strict";

function simpleArraySum(ar) {
    let answer = 0;
    ar.forEach(function(num){
        answer += num;
    });
    return answer;
}

function compareTriplets(a, b) {
    let finalArr = [0,0]
    for(let i = 0; i < 3; i++){
        if(a[i] > b[i]){
            finalArr[0] += 1;
        } else if(a[i] < b[i]){
            finalArr[1] += 1;
        };
    }
    return finalArr;
}