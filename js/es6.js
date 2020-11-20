/*
 * Complete the TODO items below
 */
const users = [
    {
        name: 'Zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash']
    },
    {
        name: 'Ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript']
    },
    {
        name: 'Luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php']
    },
    {
        name: 'Fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql']
    },
    {
        name: 'Justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php']
    }
];

// TODO: fill in your name and email and add some programming languages you know
// to the languages array
// TODO: replace the `var` keyword with `const`, then try to reassign a variable
// declared as `const`
const name = 'Will';
const email = 'will@email.com';
const languages = ['HTML', 'CSS', 'jQuery', 'Javascript'];

// TODO: rewrite the object literal using object property shorthand
users.push({
    name,
    email,
    languages
});

// TODO: replace `var` with `let` in the following variable declarations
let emails = [];
let names = [];

// TODO: rewrite the following using arrow functions
users.forEach(user => {
    emails.push(user.email);
});
users.forEach(user => {
    names.push(user.name);
});


// TODO: replace `var` with `let` in the following declaration
let developers = [];
users.forEach(user => {
    // TODO: rewrite the code below to use object destructuring assignment
    //       note that you can also use destructuring assignment in the function
    //       parameter definition
    const {name, email, languages} = user

    languages[languages.length -1] = `and ${languages[languages.length -1]}`

    // TODO: rewrite the assignment below to use template strings
    developers.push(`${name}'s email is ${email}. ${name} knows ${languages.join(', ')}.`);
});

// TODO: Use `let` for the following variable


// TODO: rewrite the following loop to use a for..of loop


    // TODO: rewrite the assignment below to use template strings

let list = '<ul class="my-list">';
for(let ele of developers){
    list += `<li>${ele}</li>`;
}
list += '</ul>';


console.log(list);
document.write(list)
