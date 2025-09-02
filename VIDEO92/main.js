const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    let siteName = "mocha loft"
    let searchText = "search now"
    let arr = ["hey", 34, 42]
  res.render("index", {siteName:siteName, searchText:searchText, arr})
})

app.get('/blog/:slug', (req, res) => {
    let blogTittle = "mocha loft-we serve tasty coffee"
    let blogContent = "mocha loft the best coffies "
  res.render("blogpost", {blogTittle: blogTittle,
    blogContent: blogContent})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

