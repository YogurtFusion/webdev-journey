const { setEncoding } = require("readline-sync")

console.log("harry\"" .length)
// what will above print in js 

// write a program to convert given string in lower case 

function lower_case(lower) {

let small = (lower .toLocaleLowerCase())
console.log(small)
    
}


lower_case("MOCHA LOFT")

// EXTRACT   the  amount out or string 

let above = "please give me 1000"

let slice = above.slice(14, 18)
console.log(slice)

// try to remove the forth character of the string 

let try_me = above.slice(0, 3) + above.slice(4);

console.log(try_me)


let sentence = "Javascript  is not that hard"

console.log(sentence.startsWith("Java"));
console.log(sentence.startsWith("java"));
console.log(sentence.endsWith("java"));

console.log(sentence.startsWith("script", 4));

let end = "harrypotterfan";
console.log(end.endsWith("fan", 15))
console.log(end.endsWith("fan", 16))

// common use cases 

let url = "https://example.com";
if (url.startsWith("https")) {
    console.log("secure site ✅")

}

else {
    console.log("not a secure site")
}

let email = "aniket@example.com";
if (email.endsWith("@gmail.com")){
    console.log("It's an gmail account")

}

else {
    console.log("not a gmail account")
}
