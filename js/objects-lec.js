"use strict";
console.log("Welcome to Intro to Objects!");

/*********************************************
*              INTRO TO OBJECTS
******************************************** */

/**
 * Objects are an unordered collection of related data in the form of
 * key:value pairs
 */

// var rubberDuck = {
//     color: "yellow",
//     role: "emotional support",
//     name: "Cody"
// };
//
// console.log(rubberDuck);

/*********************************************
 *              CREATING NEW OBJECTS
 ******************************************** */

/**
 * Objects can be created in JavaScript through the use of the 'new
 * Object()' constructor, or Object literal notation using curly braces.
 */

/**
 * TODO TOGETHER: Create a new variable (of type Object) and call it 'myPhone'. Use either the constructor or Object literal notation.
 */

// var myPhone = {
//     color: "black",
//     model: "iPhone 11",
//     storage: "16GB",
//     ring: function(){
//         console.log("Ring Ring Ring!!!")
//     },
//     picture: function(){
//         console.log("Take a picture!");
//     }
// };
//
// myPhone.ring();
// myPhone.picture();

var myPhone = new Object();
myPhone.color = "black";
myPhone.model = "iPhone 11";
myPhone.storage = "16GB";
myPhone.ring = function(){
    console.log("Ring Ring Ring!!!")
}
myPhone.picture = function(){
    console.log("Take a picture!");
}
myPhone.ring();
myPhone.picture();
/**
 * TODO: Create a new Object and call it 'myMac'. use either the constructor or Object literal notation.
 */

var myMac = {
    color: "Space Grey",
    model: "MacBook Air",
    storage: "251GB",
    camera: function(){
        console.log("Displays my image for Zoom");
    },
    microphone: function(){
        console.log("Records my voice");
    }
}
myMac.camera();



/*********************************************
 *              PROPERTIES
 ******************************************** */

/**
 * TO DO TOGETHER: Using dot notation, assign these properties to your phone
 * Object: 'model', 'color', 'storage'. Console log your phone variable to
 * check that the information was stored properly.
 */

/**
 * TO DO: Using dot notation, assign these properties to your Mac
 * Object: 'model', 'size', 'year', Console log the Object to check if the
 * information was stored properly
 */
myMac.size = "13 inch";
myMac.year = "2020";

console.log(myMac)
/**
 * TO DO TOGETHER: Assign a 'name' property to your phone. This should be of
 * type Object and store properties for the user's 'firstName' and
 * 'lastName'. Use console log to access the user's 'lastName'
 */

myPhone.name = {
    firstName: "Will",
    lastName: "Tisdale"
}

console.log(myPhone);

console.log(myPhone.name.firstName);

/**
 * TO DO: Using dot notation, assign a property called 'folders' that stores
 * an Array representing different folders in your system.
 */

myMac.folders = ["Desktop", "Pictures", "Downloads"]

console.log(myMac.folders[0]);

myMac.folders.forEach(function(folder){
    console.log(folder)
    })

/**
 * TO DO: Assign a 'login' property. This should be an object that stores
 * 'username','fakePassword' and 'email'
 */

myMac.login = {
    username: "Will Tisdale",
    fakepassword: "MyPassword",
    email: "will.tisdale.31@gmail.com"
}

console.log(myMac.login);


/*********************************************
 *                  METHODS
 ******************************************** */

/**
 * TO DO TOGETHER: We are going to add functionality to our phone Object.
 * Using the dot notation, add a method named 'call' that console logs the
 * message: "Dialing..."
 */

/**
 * TO DO: Let's add functionality to our Mac Object. Create a method named
 * 'powerOn'. When called, this should display a console message that says
 * "Powering on..."
 */

/**
 * TO DO TOGETHER: Let's add one more piece of functionality. Create a
 * method on the phone object that returns a message displaying the user's
 * firstName and lastName. Hint: use the 'this' keyword.
 */

/**
 * TO DO: One last thing. Let's add a 'currentUser' method that displays the
 * Mac user's 'username' and 'email'. Use the 'this' keyword to reference
 * the properties we created earlier.
 */


/*********************************************
 *                  NESTED VALUES
 ******************************************** */

/**
 * Because an Object is a collection of data and functionality, very often
 * we will see nested values. This can mean an Array of Objects containing
 * Arrays, Objects containing other Objects and so on.
 *
 * It is important to understand the shape of our data so that we can
 * navigate through it.
 */


/*********************************************
 *                  ARRAYS OF OBJECTS
 ******************************************** */

/**
 * If we have an Array of Objects, we can iterate through it to access each
 * Object element and pull the properties and methods that we need.
 */
