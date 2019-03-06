// import express node framework package from /node_modules
const express = require('express')
// instantiate express
const app = express()

// import data from local json file
const data = require('./data.json')

// this is your homepage in html format
app.get('/', (req, res) => {
  return res.status(200).sendFile('../client/index.html', {root: __dirname })
})

// this endpoint returns your plant data in json format
app.get('/plants', (req, res) => {
  console.log('REQUESTED!')

  return res.status(200).json(data)
})

// this catches GET requests to any route that doesn't exist
app.get('*', (req, res) => {
  // this escape character: \ says ignore the next character after
  return res.status(404).send('this resource doesn\'t exist!')
})

// let the server choose a port for you via environment variables or default to 3000 if no env variables
const port = process.env.PORT || 3000

app.listen(port, function() {
  console.log('Server is listening on port: ' + port)
})
