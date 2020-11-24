const express = require('express')

const states = require('./states')
const bodyParser = require('body-parser')

const getAllStates = require('./controllers/states')

const app = express()

app.set('view engine', 'pug')

app.get('/', (req, res) => {
    return res.render('index', {states})
})


app.get('/', getAllStates)


app.all('*', (req,res) => {
    return res.sendStatus(404)
}
)

app.listen(1337, () => {
    console.log('listening on port 1337...')
})