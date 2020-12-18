
const models = require('../models')


const getAllCoffees = async (request, response) => {
    try {
    const coffees = await models.Coffees.findAll({})

    return response.send(coffees)
} catch (error) {
    response.status(500)
}
}

const getCoffeeByTitle = async (request, response) => {
    const { title } = request.params

    const foundCoffee = await models.coffees.findOne({ where: { title } })

    return response.send(foundCoffee)
}

const saveNewCoffee = (request, response) => {
    const { title, description, ingredients } = request.body

    if (!title || !description || !ingredients) {
        return response.status(400).send('The following fields are required: title, description, ingredients')
    }

    const newCoffee = { title, description, ingredients }

    heroes.push(newCoffee)

    return response.status(201).send(newCoffee)
}

module.exports = { getAllCoffees, getCoffeeByTitle, saveNewCoffee }