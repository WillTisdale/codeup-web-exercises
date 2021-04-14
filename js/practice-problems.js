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

var nums = [1,1,2]
var removeDuplicates = function(nums) {
    for(var i = 1; i < nums.length; i){
        var previous = nums[i-1];
        if(nums[i] === previous){
            nums.splice(i, 1)
        } else {
            i++
        }
    }
    return nums
};
console.log(removeDuplicates(nums))

var prices = [7,1,5,3,6,4]
var maxProfit = function(prices) {
    var profit = 0
    for(var i = 0; i < prices.length; i++){
        if(prices[i] < prices[i+1]){
            var gain = prices[i+1] - prices[i]
            profit += gain
        }
    }
    return profit
};
console.log(maxProfit(prices))

var nums = [1,2,3,4,5,6,7]
var k = 3
var rotate = function(nums, k) {
    for(var i = nums.length - 1; i >= nums.length - k; i--){
        nums.unshift(nums.pop(nums[i]))
    }
    return nums
};
console.log(rotate(nums, k))