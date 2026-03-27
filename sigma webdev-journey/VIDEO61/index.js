// console.log("This is a string tutorial")
// let a = "Mocha";

// console.log(a[0])
// console.log(a[1])
// console.log(a[2])
// console.log(a[3])
// console.log(a[4])
// // console.log(a[6])

// console.log(a.length)

// let real_name = "MOcha"
// let friend = "loft"

// console.log("MY  fav cafe name is " + real_name + " and his fav cafe last name is " + friend )

// console.log(`My fav cafe first  name is  ${real_name} and last name is ${friend}`) 

// // this properties are not used genraly
// console.log("Here I'm going to know about \n how backslash n going to work ")
// console.log("Here I'm going to know about \" how backslash \" going to work  ")
// console.log("Here I'm going to know about \t how backslash t going to work ")
// console.log("Here I'm going to know about \r how backslash r going to work ")

let random = Math.random()
let a = prompt("Enter first no.")
let c = prompt("Enter operation")
let b = prompt("Enter your second no.")

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**",
}

if (random>0.1) {
    console.log(`THe result is ${a} ${c} ${b}`)
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}

else {
    c = obj(c)
    alert(`The result is ${eva(`${a} ${c} ${b}`)}`)
}

