console.log("This is a string tutorial")
let a = "Mocha";

console.log(a[0])
console.log(a[1])
console.log(a[2])
console.log(a[3])
console.log(a[4])
console.log(a[6])

console.log(a.length)

let real_name = "MOcha"
let friend = "loft"

console.log("MY  fav cafe name is " + real_name + " and his fav cafe last name is " + friend )

console.log(`My fav cafe first  name is  ${real_name} and last name is ${friend}`) 

// this properties are not used genraly
console.log("Here I'm going to know about \n how backslash n going to work ")
console.log("Here I'm going to know about \" how backslash \" going to work  ")
console.log("Here I'm going to know about \t how backslash t going to work ")
console.log("Here I'm going to know about \r how backslash r going to work ")

let c = "is good "
let b = "Light House Cafe "

console.log(b.toUpperCase()) // It is func not a sytax so we have to use ()
console.log(b.toLowerCase()) // same with this
console.log(b.length)// It is a syntax so we don't have to use ()
console.log(b.slice(1, 5))
console.log(b.slice(1))
console.log(b.replace("li", "ol"))
console.log(b.concat(c, "Anything you want add "))

console.log(b) // but still after all of that it print the actual  value or b bc  strings are immutable  