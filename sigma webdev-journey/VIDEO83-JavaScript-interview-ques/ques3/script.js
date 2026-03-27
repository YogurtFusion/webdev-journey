//The Mirror Mirror: Imagine you have a string, and you need to create a new string that is a mirror image of the original. Write a function that appends the reversed version of the original string to itself.

let str = prompt("")
let chars =  []
function string(str) {
    
    for (let i = 0; i < chars.length; i++) {
        chars.push(str[i])
        
    }
    
    let split  = str.split("")
    let reverse = split.reverse()
    let join = reverse.join("")

    console.log(`${join}`);    
    console.log(`${str}${join}`);
    alert(`${str}${join}`);
    
}

string(str)