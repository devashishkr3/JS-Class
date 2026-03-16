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