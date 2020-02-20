const express = require('express')
const app = express()

const portNumber = process.argv[2]

app.param('id', (req, res, next, id) => {
  req.id = id
  next()
})

app.put('/message/:id', (req, res) =>  {
  let hash = require('crypto')
    .createHash('sha1')
    .update(new Date().toDateString() + req.id)
    .digest('hex')
  res.end(hash)
})



app.listen(portNumber)