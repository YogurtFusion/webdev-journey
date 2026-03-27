// let obj = {
//     "Harry": "98",
//     "Rohan": "70",
//     "aakash": "7",

// }

// for (const key in obj) {
//     {
//         const element = obj[key];
//         console.log(element)

//     }
// }

// for (const key in obj) {
//      {
//         const element = obj[key];
//         console.log(key, + element)

//     }
// }


// const readlineSync = require('readline-sync');

// let index = Math.floor(Math.random() * 10) + 1;


// let userInput = parseInt(readlineSync.question("Enter your number: "));

// while (userInput != index) {
//     console.log("try again")

//     userInput = parseInt(readlineSync.question("Enter your number: "));
// }

// console.log("you guessed it correct " + index)

function find_mean(a,b,c,d,e) {
    let add = a + b + c + d + e;
    let mean = add/5
    return mean;
}

let mean = find_mean (1, 2, 3, 4, 5)
console.log("this is the mean " + mean)