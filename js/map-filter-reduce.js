"use strict";

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

let threeLangs = users.filter(user => user.languages.length >= 3)

console.log(threeLangs);

let userEmails = users.map(user => user.email)

console.log(userEmails);

let totalYears = users.reduce((total, user) => total + user.yearsOfExperience, 0)
let numberOfUser = users.length
let avgYears = totalYears/numberOfUser
console.log(avgYears);

let longest = users.reduce((currentEmail, user) => {
    if(user.email.length > currentEmail.length){
        currentEmail = user.email
    }
    return currentEmail
}, "")

console.log(longest);

let instructorString = users.reduce((currentString, user) => {
    if(user.name === users[users.length -1].name){
        currentString += `${user.name}.`
    } else {
        currentString += `${user.name}, `
    }
    return currentString
}, "Your instructors are: ")

console.log(instructorString);
let mySet = new Set();
let allLanguages = users.reduce((currentLanguage, user) => {
    for(let ele of user.languages){
        mySet.add(ele)
    }
    return mySet
}, mySet)

console.log(allLanguages);
