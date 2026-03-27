//Faultu calculator

// This does the following : 
// 1. It takes  two numbers as an input from the user 
// 2. It performs the worng operation as follows:
// + --> -
// * --> +
// - --> /
// / --> ** 
// 
// It performs wrong operations only 10% of the time 
// 
// ;

let a = Math.random()

let b = Math.random()

console.log ("a + b = " + (a-b))
console.log ("a * b = " + (a+b))
console.log ("a - b = " + (a/b))
console.log ("a / b = " + (a**b))