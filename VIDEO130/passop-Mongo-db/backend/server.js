const express = require('express')
const dotenv = require("dotenv")
const{MongoClient} = require("mongodb")
const bodyparser = require("body-parser")
const cors  = require("cors")

dotenv.config()

const url = "process.env.MONGO_URI";
const client = new MongoClient(url)
client.connect()

const dbName = "passop.env.DB_NAME"
const app = express()
const port = 3000
app.use(bodyparser.json())


app.use(bodyparser.json())
app.use(cors())

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