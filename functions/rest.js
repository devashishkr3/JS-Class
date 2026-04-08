// REST :- Allows a function to take a indifinite
// number os arguments and bundle then in an array.

function usingRest(...arr){ // args = [1,2,3,4,5,6,7,"Hello", "Don"]
    for(el of arr){
        console.log(`You gives me ${el}`);
    }
}

usingRest(1,2,3,4,5,6,7,"Hello", "Don");

let sum = (...args) =>{
    return args.reduce((sum, el) =>{
        return sum + el;
    })
}

console.log(sum(1,2));