// Use JavaScript to create a game of snake, Water and gun . the game should ask you to enter S, W or G. The computer Should be able to randomly genrate S, W or G and decloare win or loos using the alert use confirm and prompt Whenever required 

let arr = ["S", "G", "W"]

while (true) {
    let input = prompt("Chosse between S for Snake, G for GUN and W for WATER ").toUpperCase()
    let randomGuess = arr[Math.floor(Math.random()*arr.length)]
    if (!["S", "G", "W"].includes(input)) {
        alert('Choose The correct option');
        continue
    } 
    
    else if (input ==  randomGuess){
        alert('It\'s a draw');
        continue
    }
    else if (
        (randomGuess == "S" && input == "G")||
        (randomGuess == "W" && input == "S")||
        (randomGuess == "G" && input == "W")
    ) {
        alert('you won');
        
    }

    else {
        alert('You loose L');
        
    }

    if (!(confirm("Wanna play again??"))){
        alert('Thanks for playing');
        break
    }
}