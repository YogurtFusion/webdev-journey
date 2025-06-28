// Create an array of numbers and take input from the user to add numbers to array
// let a = Number(prompt("enter your input"))

const { prompt } = require("readline-sync")

// let arr = [1, 2, 3, 4, 5, 6]

// let add  = arr.push(a)

// console.log(arr, add)

// keep adding to the array until 0 is added to the array


// let arr = [1, 2, 3, 4, 5, 6]
// for (let i = 0; i < arr.length; i++) {
//     let ab = prompt() 
//     if (ab>0) {        
//         console.log(arr.push(ab))
//     }
//     else {
//         break
//     }
// }

// console.log(array)

// filter for no. numbers divsible by 10 

let ten = [10, 20, 33, 40, 55, 30, 50]

let result = ten.filter((num) => num % 10 ===0);
console.log (result)




// create an array of square of given number 

let pro = prompt()

const square = (num) => {
    return num * num
}
console.log(square(Number(pro)))

// use reduce to calculate factorial of a given Number from an array of first n nautral numbers (n brings then number whose factorail need to be calculated)


const natural = [1, 2, 3, 4, 5, 6]
const factorial = natural.reduce((a, b) => a * b);

console.log(factorial)