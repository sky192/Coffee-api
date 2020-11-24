const express = require('express')


const { getAllStates, getStateByCapital } = require('./controllers/states')

const app = express()

app.set('view engine', 'pug')
app.use(express.static('public'))

app.get('/', getAllStates)

app.get('/:capital', getStateByCapital)


app.all('*', (req,res) => {
    return res.sendStatus(404)
})

app.listen(1337, () => {
    console.log('listening on port 1337...')
})