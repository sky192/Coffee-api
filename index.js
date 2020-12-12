const express = require('express')

const coffees = require('./coffees')

//const bodyParser = require('body-parser')

//const { getStateByCapital, getAllCoffes } = require('./controllers/coffee')

const app = express()

app.set('view engine', 'pug')
app.use(express.static('public'))

app.get('/', (request, response) => {
    return response.render('index')
})

app.get('/coffees', (request, response) => {
    return response.send(coffees)
})

app.get('/:title', (request, response) => {
    const { title } = request.params

    const foundCoffee = coffees.filter((coffee) => coffee.title === title)

    return response.send(foundCoffee)
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