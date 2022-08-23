const { json } = require('express')
const express = require('express')
const app = express()
const port = 3000
const fs = require("fs")


app.get('/', (req, res) => {
  res.send('mas nathan manaa?')
})

app.get('/game', (req, res) => {
    res.send('mari masuk zoom')
})

app.get('/login', (req, res) => {
  // res.send('ceklogin')
  let database = fs.readFileSync("./database.json", "utf-8")
  let databaseJSON = JSON.parse(database);
  console.log(databaseJSON);
  res.send('gokil')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
