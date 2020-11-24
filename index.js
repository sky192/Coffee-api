const express = require('express')
const bodyParser = require('body-parser')

const getAllStates = require('./controllers/states')

const app = express()

app.get('/', getAllStates)


app.listen(1337, () => {
    console.log('listening on port 1337...')
})