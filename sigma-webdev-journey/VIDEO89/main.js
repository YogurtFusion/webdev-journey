const express = require('express')
const app = express()
const port = 3000

app.use(express.static("public"))

app.get('/', (req, res) => {
    console.log("Hey it's a get request");

    res.send('Hello World!2')
})

app.post('/', (req, res) => {
    console.log("Hey it's a post request");
    res.send('Hello World POST!')
})
app.put('/', (req, res) => {
    console.log("Hey it's a put request");
    res.send('Hello World PUT!')
})

// app.get('/index', (req, res) => {
//     console.log("Hey it's index.html file");

//     res.send('Hello World index!')
// })

app.get('/index', (req, res) => {
    console.log("Hey it's index.html file");

    res.sendFile('templates/index.index',{root: __dirname})
})

app.get("/api", (req, res)=>{
    res.json({a:1, b:2, c:3, d:4, name: ["chapple", "cheese"]})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
