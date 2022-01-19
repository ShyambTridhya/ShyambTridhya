const express = require('express')
const app = express()

//App Use
app.use(express.json())

//Routes Imports
const product = require('./routes/ProductRoute')

app.use('/api/v1', product)

module.exports = app