// Spread :- Expend an iterable into 
// multiple values.

let arr = [1,2,3,4,5];

console.log(arr);
console.log(...arr);

let name = "Sonam Kapoor";
console.log(name);
console.log(...name);

let student = {
    name : "Rahul",
    father_name : "Siman Singh",
    roll : 89,
    subject : "Maths"
}

// let student2 = {
//     name : "Sonu",
//     father_name : "Rohit Kumar",
//     roll : 78,
//     subject : "History"
// }

let newStudent = {...student, id : 123, favSong: "teri ore"};

console.log(newStudent);

