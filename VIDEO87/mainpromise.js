import fs from "fs/promises"

let a = await fs.readFile("chapple.txt")

let b = await fs .appendFile("chapple.txt", "\n \n \n \n \n \n this is a amazing progress")
console.log(a.toString);
