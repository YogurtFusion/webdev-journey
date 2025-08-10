// The Vowel Counter: You need to create a function that counts the number of vowels in a given string. Consider both uppercase and lowercase vowels.
let string  = "string"

function vowelsCounter(string) {
    
    
    let str = string.split("")
    let vowels = ["a", "e", "i", "o", "u","A", "E", "I", "O", "U"]
    let count = 0
    console.log(`${str}`);
    
    for (const i of str) {
        if (vowels.includes(i)){
            count++
        }
        
    }
    
    console.log(`the no. vowels in your string are ${count}`);
}

vowelsCounter(string)