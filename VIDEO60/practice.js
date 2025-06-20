/* faulty calculator
 1. takes two no. as an input from user 
 2. it perform wrong operation as follows: 
  + ----> -
  * ----> + 
  - ----> /
  / ----> **
  */

  let random = Math.random();

  let a = prompt("enter your first no.");
  let b = prompt("enter your second no.");
  let c = prompt("enter your operation");

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**"
}

if ( random  > 0.1 ){
    console.log(`the result is ${a} ${c} ${b}`)
    alert(`the result is ${eval(`${a} ${c} ${b}`)}`)
}

else {
    c = obj[c]
    alert(`the result is ${eval(`${a} ${c} ${b}`)}`)
}
