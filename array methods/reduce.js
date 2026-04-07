// let arr = [1,2,3,4,5];

// let newArr = arr.reduce((res, el) =>{
//     return (res + el);
// })

// console.log(newArr);

let arr2 = [1,4,2,5,7,2,9,2];

let max = arr2.reduce((max, el) =>{
    if(max < el){
        return el;
    }
    else{
        return max;
    }
})

console.log(max);

// Q. find the minimum of an array using this reduce function
// [1,4,2,5,7,2,9,2]

// Q. check if all numbers in a array are multiples of 10 or not
// [10,20,30,40,50,70,60,20,90,220]

