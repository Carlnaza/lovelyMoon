require('dotenv').config()
const { join } = require('path')
const express = require('express')

const app = express()

app.use(express.static(join(__dirname, 'client', 'build')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(require('./controllers'))

// app.get('/*', (req, res) => {
//   res.sendFile(join(__dirname, 'client', 'build', 'index.html'))
// })

require('./config')
  .then(() => app.listen(process.env.PORT || 3001))
  .catch(e => console.error(e))
