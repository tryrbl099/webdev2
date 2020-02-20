const express = require('express')
const app = express()

const portNumber = process.argv[2]
const pathToPugTemplate = process.argv[3]

app.set('view engine', 'pug')
app.set('views', pathToPugTemplate)
app.get('/home', (req, res) => {
  res.render('index', {date: new Date().toDateString()})
})
app.listen(portNumber)