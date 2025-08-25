const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/about', (req, res) => {
  res.send('about us')
})
app.get('/contact', (req, res) => {
  res.send('<h1>Hello you can contact me here</h1> <br> ph: 323322323')
})
app.get('/blog', (req, res) => {
  res.send('Hello blog page')
})
// http://localhost:3000/blog/chapple?mode=dark&region=in
app.get('/blog/:slug', (req, res) => {
    console.log(req.params);
    console.log("yeah pramas is working");
    
    console.log(req.query);
    
    
    
  res.send(`hello ${req.params.slug}`)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
console.log("Server started. Waiting for requests...");
