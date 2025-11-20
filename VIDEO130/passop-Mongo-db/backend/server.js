const express = require('express')
const dotenv = require("dotenv")
const{MongoClient} = require("mongodb")
const bodyparser = require("body-parser")

dotenv.config()

const url = "mongodb://localhost:27017";
const client = new MongoClient(url)

const dbName = "passop"
const app = express()
const port = 3000
app.use(bodyparser.json())

async function start() {
  
  await client.connect();
  
  app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
  app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
  })
  
}

start()