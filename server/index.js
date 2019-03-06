const express = require('express')

const app = express()

// let the server choose a port for you via environment variables or default to 3000 if no env variables
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  console.log('REQUESTED!')
})

app.listen(port, function() {
  console.log('Server is listening on port: ' + port)
})
