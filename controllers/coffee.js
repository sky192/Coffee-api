/* eslint-disable no-undef */

const models = require('../models')

const Op = require('Sequelize').Op



const getAllCoffees = async (request, response) => {
  const coffees = await models.Coffees.findAll({})

  return response.send(coffees)
}

const getCoffeeByTitle = async (request, response) => {
  try {
    const { title } = request.params

    const foundCoffee = await models.Coffees.findOne({
      where: {
        title: { [models.Op.like]: `%${title}%` },
      }
    })

    return foundCoffee
      ? response.send(foundCoffee)
      : response.sendStatus(404)
  } catch (error) {
    return response.status(500).send('Unable to retrieve coffee, please try again')
  }
}


const saveNewCoffee = (request, response) => {
  const { title, description, ingredients } = request.body

  if (!title || !description || !ingredients) {
    return response.status(400).send('The following fields are required: title, description, ingredients')
  }

  const newCoffee = { title, description, ingredients }

  coffees.push(newCoffee)

  return response.status(201).send(newCoffee)
}

module.exports = { getAllCoffees, getCoffeeByTitle, saveNewCoffee }
