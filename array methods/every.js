let num = [2,4,6,8,10];

let newArr = num.every((el) => {  
    return el % 2 == 0
});

console.log(newArr);

// only returns a boolean value 