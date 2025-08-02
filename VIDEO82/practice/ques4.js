//write  a simple Interest calculator using JavaScript 

// let principal = 3

// let rate = 2

// let time = 1 

// let Interest = (principal * rate * time ) / 100

// console.log(Interest);


// more improved version 

let principal = parseInt(prompt("Enter you principal🥸"))
let rate = parseInt(prompt("Enter you rate🐌"))
let time = parseInt(prompt("Enter you time⏳"))




function Interest (principal, rate, time) {
        return (principal*rate*time)/100
   
}

let reuslt = Interest(principal, rate ,time )
 console.log(`simple intrest: ${reuslt}`);