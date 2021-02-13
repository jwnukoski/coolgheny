const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const compression = require('compression')

app.use(compression())
app.use(express.static('build'))

app.listen(port, () => {
  console.log(`Listening on port: ${port}`)
})
