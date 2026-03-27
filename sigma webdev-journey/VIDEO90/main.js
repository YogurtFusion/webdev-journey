const express = require('express')
const app = express()
const port = 3000
const fs = require("fs")
const blog= require("./routes/blog")

// app.use(express.static("public"))

app.use("/blog", blog)

// Middleware 1
app.use((req, res, next)=>{
    console.log(req.headers);
    req.chapple = " I'm chapple chesse fantisiser "
    fs.appendFileSync("logs.txt", `${Date.now()} is a ${req.method}\n`)
    console.log(`${Date.now()} is a ${req.method}`);
     
    next()
    
})

//Middleware 2
app.use((req, res, next)=>{
    console.log("m2");
    next()
    
})

app.get('/', (req, res) => {
  res.send('Home page HELLO World!')
})
app.get('/about', (req, res) => {
  res.send('Hello about! ' +  req.chapple)
})
app.get('/contact', (req, res) => {
    req.chapple = "I'm not inrested in fantasies  "
  res.send('Hello it\'s me ! ' + req.chapple)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
