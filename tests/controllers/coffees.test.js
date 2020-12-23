/* eslint-disable linebreak-style */

const chai = require('chai')
const sinon = require('sinon')
const sinonChai = require('sinon-chai')
const models = require('../../models')
const { describe, it } = require('mocha')
const { coffeesList, singleCoffee } = require('../mocks/coffees')
const { getAllCoffees, getCoffeeByTitle, saveNewCoffee } = require('../../controllers/coffee')

chai.use(sinonChai)
const { expect } = chai


describe('Controllers - coffee', () => {
  describe('getAllCoffees', () => {
    it('retrieves a list of coffees from the database and calls response.send() with the list',
      async () => {
        const stubbedFindAll = sinon.stub(models.Coffees, 'findAll').returns(coffeesList)
        const stubbedSend = sinon.stub()
        const response = { send: stubbedSend }

        await getAllCoffees({}, response)

        expect(stubbedFindAll).to.have.callCount(1)
        expect(stubbedSend).to.have.been.calledWith(coffeesList)
      })
  })

  describe('getCoffeeByTitle', () => {
    it('retrieves the coffee associated with the provided title from the database and calls response.send with it',
      async () => {
        const request = { params: { title: 'Cappuccino' } }
        const stubbedSend = sinon.stub()
        const response = { send: stubbedSend }
        const stubbedFindOne = sinon.stub(models.Coffees, 'findOne').returns(singleCoffee)

        await getCoffeeByTitle(request, response)

        expect(stubbedFindOne).to.have.been.calledWith({ where: { title: 'Cappuccino' } })
        expect(stubbedSend).to.have.been.calledWith(singleCoffee)
      })
  })

  describe('saveNewCoffee', () => {
    it('accepts new coffee details and saves them as a new coffee, returning the saved record with a 201 status',
      async () => {
        const request = { body: singleCoffee }
        const stubbedSend = sinon.stub()
        const stubbedStatus = sinon.stub().returns({ send: stubbedSend })
        const response = { status: stubbedStatus }

        const stubbedCreate = sinon.stub(models.Coffees, 'create').returns(singleCoffee)

        await saveNewCoffee(request, response)

        expect(stubbedCreate).to.have.been.calledWith(singleCoffee)
        expect(stubbedStatus).to.have.been.calledWith(201)
        expect(stubbedSend).to.have.been.calledWith(singleCoffee)
      })
  })
})
