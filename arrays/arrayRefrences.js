console.log("Array Refrences");

// let arr = [1,2,3,4,5];   
// let arr2 = [1,2,3,4,5];

// if (arr[0] == arr2[0]){
//     console.log(true);
// }else{
//     console.log(false); 
// }


let arr = [1,2,3,4,5];  // let address or arr = 0x34d
let copyArr = arr;  // copyArr = 0x34d & address of copyArr = 0x34e

console.log(arr); // [1,2,3,4,5]
console.log(copyArr); // [1,2,3,4,5]

copyArr[3] = 8;

console.log(arr);
console.log(copyArr);

arr.push(6);

console.log(arr);
console.log(copyArr);

const fixedArr = [1,2,3,4,5];
let sum = fixedArr[0] + fixedArr[1];