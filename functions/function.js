// functions in js

// Function Expression - A function expression is a function that is 
// assigned to a variable and can be called using that variable.
//  It can be anonymous (without a name) or named.
let sum = function (a, b) {
    return a + b;
}

let result = sum(2, 3);
console.log(result); // Output: 5

// Higher-Order Functions - A higher-order function is a function that 
// takes another function as an argument or returns a function as a result.
function greet() { // let as function 1 
    console.log(`Hello`);
     
}

function higherOrderFunction(func, n) {  // let as function 2
    for(let i = 1; i <= n; i++) {
        func(); // calling function 1 inside function 2
    }
}

higherOrderFunction(greet,3);  // Output: 3 Hello

// Object Methods - Functions can also be defined as methods of an object.
const calculator = {
    add : function(a, b) {
        return a + b;
    },
    sub : function(a, b) {
        return a - b;
    },
    mul: function(a, b) {
        return a * b;
    }
};

console.log(`calculator.add(5, 4): ${calculator.add(5, 4)}`); // Output: 9

// Shorthand Method - In ES6,you can define methods in an object
// using a shorthand syntax.
let calculator2 = {
    add(a, b) {
        return a + b;
    },
    sub(a, b) {
        return a - b;
    },
    mul(a, b) {
        return a * b;
    }
};

console.log(`Object calculator2: ${calculator2.mul(5, 4)}`); // Output: 20

