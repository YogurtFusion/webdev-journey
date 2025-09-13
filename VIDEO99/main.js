const express = require('express')
const app = express()
const mongoose = require("mongoose")
const Employee = require("./models/employee")

mongoose.connect("mongodb://127.0.0.1:27017/company")
const port = 3000

app.set("view engine", "ejs");

const getRandom = (arr) =>{
    let rno = Math.floor(Math.random()* (arr.length -1))
    return arr [rno]
}

app.get('/', (req, res) => {
    res.render("index", { foo: "Foo" })
})

app.get('/generate', async (req, res) => {
    // clear the collection
    await Employee.deleteMany({})
    // Genrate a random data

    let randomNames = ["Rohan ", "sohan", "Mohan", "Sobham"]
    let randomLang = ["python", "js", "C++", "java"]
    let randomCities = ["Dholakpur", "shibuya", "ohio", "efstien island"]

    for (let index = 0; index < 10; index++) {
        let e = await Employee.create({
            name: getRandom(randomNames),
            salary: Math.floor(Math.random()*32444234),
            language: getRandom(randomLang),
            city: getRandom(randomCities),
            isManager: (Math.random()>0.5)?true:false
        })

         console.log(e);
         
    }


    res.render("index", { foo: "FOO" })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
