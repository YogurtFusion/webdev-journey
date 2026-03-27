const fs = require("fs")
// const fs = require("fs/promises")

console.log("starting");
fs.writeFileSync("chapple.txt", "chapple cheese is tasty ")

fs.writeFile("chapple2.txt", "I never tried it but someday i will try chapple chesse",() =>{
    console.log("done");
    fs.readFile("chapple2.txt", (error, data)=>{
        console.log(error, data.toString());
        
    })
    fs.appendFile("chapple.txt", "chapple cheese maybe don't exist but if it is then I'll definetly try it",(e,d)=>{
        console.log(d);
        
    })
})

console.log("ending");
