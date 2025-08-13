// 4. The Password Validator: You are building a password validation feature. Create a function that checks if a given password meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit.

let input = prompt("Enter your passwords here: ")

// let input = "chapple cheese"
function passwordValidator(input) {
    let upperCase = /[A-Z]/.test(input)
    let lowerCase = /[a-z]/.test(input)
    let digit = /[0-9]/.test(input)
    let length = input.length >= 8
    if (!upperCase) {
    let result = "🙂‍↔️You're pass should've atleast one upper case"    
    console.log(`${result}`);
    alert(`${result}`);
    }

    if (!lowerCase) {
    let result = "🍑You're pass should've atleast one lower case"    
    console.log(`${result}`);
    alert(`${result}`);
    }
    if (!digit) {
        let result = "🔞You're pass should've atleast one digit"
        console.log(`${result}`);
        alert(`${result}`);
    }
    if (!length) {
        let result = "📏You're pass should've more digits than 8 "
        console.log(`${result}`);
        alert(`${result}`);
        

    }
    
    if (upperCase && lowerCase && digit && length) {
        
        console.log(`you're pass is strong ${input}`);
        alert(`you're pass is strong ${input} 👅`);
    }

}

passwordValidator(input)