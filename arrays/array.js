let fruits = ["mango", "orange", "guava"];
console.log(fruits);

fruits[0] = "banana";
console.log(fruits);

fruits[3] = "litchi";
console.log(fruits);

fruits[10] = "papaya";
console.table(fruits);
console.log(`accessing fruit of 4th index : ${fruits[4]}`);
console.log(`Array Length : ${fruits.length}`);

// template literal
let a = 10;
let b = 12;
let name = "Devashish";

console.log("Hello Everyone");
console.log(name);
console.log(`sum of a & b : ${a+b}`);

// Methods of array:-
// push() method in JS : add in end

let cars = ["audi", "bmw", "maruti", "xuv"];  
console.log(`Without changes: ${cars}`); //["audi", "bmw", "maruti", "xuv"]

cars.push("toyota");
console.log(`push in last : ${cars}`); //["audi", "bmw", "maruti", "xuv", "toyota"]

// pop() method in JS : delete from end & returns it

cars.pop();
console.log(`delete from end : ${cars}`); //["audi", "bmw", "maruti", "xuv"]

// unshift() method in JS : add to start
cars.unshift("ferrari");
console.log(`add to start : ${cars}`); // ["ferrari", "audi", "bmw", "maruti", "xuv"]

cars.unshift("nano");
console.log(`add nano to start : ${cars}`);  // ["nano", "ferrari", "audi", "bmw", "maruti", "xuv"]

// shift() method in JS : delete from start & returns it
cars.shift();
console.log(`delete nano from start ${cars}`); //["ferrari", "audi", "bmw", "maruti", "xuv"]




