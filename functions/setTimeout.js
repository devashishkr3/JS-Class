// console.log("Welcome to setTimeout function example!");

// // setTimeout is a built-in JavaScript function that allows 
// // you to execute a function after a specified delay (in milliseconds).

// setTimeout(() =>{
//     console.log("Hello Everyone!!");
// }, 4000);

// console.log("Endline");

// // set Interval Function in JS:- 

// let Id = setInterval(() =>{
//     console.log("Set Interval");
// }, 2000);

// setTimeout(() =>{
//     clearInterval(Id);
//     console.log("Interval Cleared");
// }, 12000);


//Q1. WA arrow Function to return/ find square of a 
// number and print.

//Q2. write a function that prints "Hello world" 5 times at a 
// interval of 2 sec each. 

let text = "Loading...";
console.log(text);

setTimeout(() =>{
    text = "Data Fetched.";
    console.log(text);
}, 3000);