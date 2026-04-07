let num = [1,3,5,7];

let newArr = num.some((el) => {  
    return el % 2 == 0
});

console.log(newArr);

// only returns a boolean value 