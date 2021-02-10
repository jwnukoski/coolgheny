const express = require('express')
const app = express()
const port = process.env.PORT || 3000
// const axios = require('axios')
const compression = require('compression')
// const path = require('path')

app.use(compression())
app.use(express.static('build'))

app.listen(port, () => {
  console.log(`Listening on port: ${port}`)
})
