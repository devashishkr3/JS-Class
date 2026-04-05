//This :- "this" keyword is used to refer to the current object.
//It is used to access the properties and methods of the current object.
//It is also used to refer to the current object in the constructor function.

let student3 = {
    name : "Aditya",
    age : 20,
    english : 90,
    math : 95,
    science : 85,
    getAvg : function(){
        let avg = (this.english + this.math + this.science) / 3;
        console.log(avg);
        
    }
}

student3.getAvg();

// try & catch :- the try statement allows you to define a
//  block of code to be tested for errors while it is 
// being executed.

// the catch statement allows you to define a block of code to be
//  executed, if an error occurs in the try block.

try{
    console.log(age);
}catch(error){
    console.log(error.message);
}

console.log("This is a log message.");

// let arr = [1,2,3,4,5];
// console.log(arr);
