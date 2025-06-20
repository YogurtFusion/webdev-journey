// Random bussines name genereator 
// 
// Adjectives:
// Crazy 
// Amazing
// Fire
// 
// Shop Name:
// Engine
// Foods
// Garments
// 
// Another Word
// Bros
// Limited
// Hub
// 

// Adjectives


let Random1 = {
    1: "Crazy",
    2: "Amazing",
    3: "Fire",

}

// shop name;
let Random2 = {

    1: "Engine",
    2: "Foods",
    3: "Garments",
}

// Another Words;
let Random3 = {

    1: "Bros",
    2: "Limited",
    3: "Hub",
}

function names(obj) {
    let RandomME = Math.floor(Math.random() * 3) + 1;
    return obj[RandomME];
}

let bussinesname = `${names(Random1)} ${names(Random2)} ${names(Random3)}`;

console.log("your genrated business name is : ", bussinesname)