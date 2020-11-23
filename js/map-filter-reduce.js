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

const threeLangs = users.filter(user => user.languages.length >= 3)

console.log(threeLangs);

let userEmails = users.map(user => user.email)
// let userEmails = users.map(({email}) => email) <== THIS ALSO WORKS

console.log(userEmails);

let totalYears = users.reduce((total, {yearsOfExperience}) => total + yearsOfExperience, 0)
let {length} = users
let avgYears = totalYears/length
console.log(avgYears);

// let longest = users.reduce((currentEmail, {email}) => {
//     if(email.length > currentEmail.length){
//         currentEmail = email
//     }
//     return currentEmail
// }, "")

let longest = userEmails.reduce((longEmail, currEmail) => (currEmail.length > longEmail.length) ? currEmail : longEmail)

console.log(longest);

let instructorString = users.reduce((currentString, {name}) => {
    return currentString  += `${name}, `
}, "Your instructors are: ").slice(0, -2) + ".";

console.log(instructorString);


let mySet = new Set();
let allLanguages = users.reduce((accum, {languages}) => {
    for(let ele of languages){
        mySet.add(ele)
    }
    let finArr = Array.from(mySet)
    return accum
}, mySet)


console.log(allLanguages);
for(let language of allLanguages){
    console.log(language);
}