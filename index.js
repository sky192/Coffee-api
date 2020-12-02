const express = require('express')

//const bodyParser = require('body-parser')

//const { getStateByCapital, getAllCoffes } = require('./controllers/coffee')

const app = express()

app.set('view engine', 'pug')
app.use(express.static('public'))

app.get('/api', (request, response) => {
    return response.render('index')
})

/*app.get('/coffee', (request, response) => {
    return response.render('coffee')
}) */

app.all('*', (req,res) => {
    return res.sendStatus(404)
})

app.listen(1337, () => {
    console.log('listening on port 1337...')
})