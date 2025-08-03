// Write a JavaScript program to generate a random number and store it in a variable. The program then taskes an input from the user to tell them wheter the guess was correct or greater or lower then the original number. 100 - (no. of guesses)is the score of the user The program is expected to  terminate once the number is guessed. Number should be be between  1 - 100

let random = Math.floor(Math.random() *100)+1
console.log(`for debugging and testing ${random}`);
let attempts= 0;
let input;
while (true) {
    input = parseInt(prompt("Enter your guess🔫🔫"))
    attempts++;
    if (input < random) {
        alert("you  entered a smaller no.🛩️🫠");
        
    }
     else if (input > random) {
        alert("you  entered a bigger no.🦤🦥");
        
    }

    else if (input == random){
        alert("you entered a correct no..😛");
        let winPrint = (`YO you finally gussed correct number ${random} in ${attempts} attempts 🍒`);
        console.log(winPrint);
     let Div =    document.createElement("div")
        document.getElementsByClassName(Div).innerText = `YO you finally gussed correct number ${random} in ${attempts} attempts 🍒`
        document.body.append(Div)
    }

    else {
        alert("you entered a wrong no.");
        continue
    }
}
