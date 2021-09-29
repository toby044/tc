'use strict';

// Used for debugging

// console.log("This is working !"); 
// console.error("This is an error !");
// console.warn("This is a warning !");

// Variables
// var(global scope, dont use this !), let, const

// Data types
// Strings, numbers, null, undefined, booleans, symbols
// const name = "John"; //String
// const age = 30; // Number
// const rating = 4.5; // Decimal
// const isCool = true; // Boolean
// const x = null; //Empty variable
// const y = undefined; //Can be defined, or initialized
// let z; //Undefined
// console.log(typeof name); //typeof Used to test data type 

// Concatenation  OLD METHOD
// onst name = "John";
// const age = 30;
// console.log('My name is ' + name + ' and i am ' + age);

// Template string BETTER METHOD
// console.log(`My name is ${name} and i am ${age}`); //can be made to a variable

// String methods
// const s = "Hello World";
// console.log(s.substring(0, 5).toUpperCase());

// Dividing the string into an array filled with the tags, by the split method, which lets me tell it how where to divide with comma space
// Can come in handy for things like databases
// const tags = "technology, computers, it, code";
// console.log(tags.split(", "));

// Arrays - variables that hold multiple values
// const numbers = new Array(1,2,3,4,5); //constructor - OUTDATED
// const fruits = ["apples", "pears", "oranges"];
// fruits[3] = "grapes"; //Add a variable to the 3rd(4th) spot of the array
// fruits.push("mangos"); //Adds a variable to the end no matter how many are in it
// fruits.unshift("strawberries"); //Adds a variable to the beginning
// fruits.pop(); //Removes the last variable of the array (mangos)
// console.log(fruits.indexOf("oranges")); //Checking the index of the chosen variable and prints to console
// console.log(fruits);

// Objects
/*const person = {
    firstName: "John",
    lastName: "Doe",
    hobbies: ["Music", "Sports", "tv"],
    age: 30,
    adress: {
        gade: "Kolding Åpark",
        nummer: 18,
        by: "Kolding"
    }
};*/

// console.log(person.firstName, person.lastName); //Logging multiple property inside object
// console.log(person.hobbies[1]); //Logging array inside object
// console.log(person.adress.by); //Logging property inside object inside object

// const { firstName, lastName, adress: { city} } = person; // Pulling firstName and lastName out of the object, now they are variables
// console.log(firstName + " " + lastName); //Logging those variables

// person.email = "john@doemail.com"; // Add property to object
// console.log(person); // Logging property

// Array filled with objects
/*const todos = [
    {
        id: 1,
        text: "Take out the trash",
        isCompleted: true
    },
    {
        id: 2,
        text: "Make pasta",
        isCompleted: false
    },
    {
        id: 3,
        text: "Meeting",
        isCompleted: true
    }
];*/

// console.log(todos); // Logging array with object
// console.log(todos[1].text) // Logging data withing the object of the array

// const todoJSON = JSON.stringify(todos); 
// console.log(todoJSON); // How we would send data to a server with JSON

// Loops
// For 

/*const todos = [
    {
        id: 1,
        text: "Take out the trash",
        isCompleted: true
    },
    {
        id: 2,
        text: "Make pasta",
        isCompleted: false
    },
    {
        id: 3,
        text: "Meeting",
        isCompleted: true
    }
];*/

// let i = 0  // Sets the variable 
// i < 10 // The limitor of the loops. It is gonna run until this condition is met
// i++ // Every time the loop runs, add this, in this case, 1
// This loop stops at 10, because it is set to run only when i < 10. This stops it after loop 9 has been completed
/*for(let i = 0; i < 10; i++){
    console.log(`For loops number: ${i}`);
}*/

// While
/*let i = 0;
while(i < 10) {
    console.log(`While loops number: ${i}`);
    i++
};*/

// Looping through arrays
/*const todos = [
    {
        id: 1,
        text: "Take out the trash",
        isCompleted: true
    },
    {
        id: 2,
        text: "Make pasta",
        isCompleted: false
    },
    {
        id: 3,
        text: "Meeting",
        isCompleted: true
    }
];*/

/*for(let i = 0; i < todos.length; i++){ // Not the best way
    console.log(todos[i].text);
}*/

/*for(let todo of todos) { // Better way
    console.log(todo.text);
};*/

// forEach, map, filter // High order arrays
// forEach
/*todos.forEach(function(todo) {
    console.log(todo.text);
});*/

// Map 
/*const todoText = todos.map(function(todo) {
    return todo.text; //returns array of text
});
console.log(todoText);*/

// Filter    // Functional programming example
/*const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted === true; //returns array with completed ids
}).map(function(todo){
    return todo.text; //returns the text of the completed ids
}); 
console.log(todoCompleted);*/

// Conditionals

const x = 4;
const y = 10;

if (x > 5 || y > 10) {
    console.log('x is more than 5 or y is more than 10');
} else if(x > 10) {
    console.log('x is greater than 10');
} else {
    console.log('x is less than ten');
};







