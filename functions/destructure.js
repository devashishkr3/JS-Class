let names = ["kumar sanu", "modiji", "meloni", "arjit"];

let [winner, runnerup, ...others] = names;

console.log(winner);
console.log(runnerup);
console.log(others);


// object destructuring
let student = {
    name : "Roshni",
    age : 21,
    class : "1st year",
    username: "roshniydv@556",
    password: "abcd"
}

let{username : user, password: secret} = student;

console.log(user);
console.log(secret);
