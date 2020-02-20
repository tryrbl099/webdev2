const express = require('express')
const fs = require('fs')
const app = express()

const portNumber = process.argv[2]
const filename = process.argv[3]

app.get('/books', (req, res) => {
  fs.readFile(filename, (err, data) => {
    if (err) return res.sendStatus(500)
    res.json(JSON.parse(data))
  })
})

app.listen(portNumber)