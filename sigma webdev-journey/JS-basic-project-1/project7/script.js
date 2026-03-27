// Create a JavaScript Program capable of genrating a password  which contains atleast one lowercase, one uppercase and one special characters. create a pasword class to achive the same 

class passwordGenrator {
    constructor(passwordLenght) {
        this.passwordLenght = passwordLenght
        this.upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]
        this.lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]

        this.specialLetters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]
    }

    randomPassword(){
        let password = ""
       password += this.getRandomChar(this.upperLetters)
       password += this.getRandomChar(this.lowerLetters)
       password += this.getRandomChar(this.specialLetters)

       let remainingLenght = this.passwordLenght - 3
       
       let allChars = [...this.upperLetters, ...this.lowerLetters, ...this.specialLetters]

       for (let i = 0; i < remainingLenght; i++) {
        password += this.getRandomChar(allChars)
       }
       return password
    }

    getRandomChar(array){
     const i = Math.floor(Math.random() * array.length)
     return array[i]
    }

    shuffle(array) {
        let shuffled = []

        while (array.length > 0){
            const randomIndex = Math.floor(Math.random()* array.length)
            const char = array.splice(randomIndex, 1)[0]
            shuffled.push(char)
        }
        return shuffled;
    }
}

const genrator = new passwordGenrator(10)

const myPassword = genrator.randomPassword()
console.log("genrated pass" , myPassword);


// future upgrades
//  user can decide the lenght of password
//  user  can see the passwords on the screens
 // passwords and save on scrren localy 