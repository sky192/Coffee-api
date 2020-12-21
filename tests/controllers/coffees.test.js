/* eslint-disable linebreak-style */
const chai = require('chai')
const sinon = require('sinon')
const sinonChai = require('sinon-chai')
const models = require('../../models')
const { describe, it } = require('mocha')
const { coffeesList } = require('../mocks/coffees')
const { getAllCoffees } = require('../../controllers/coffee')

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

  describe('getCoffeeByTitle', () => {})

  describe('saveNewCoffee', () => {})
})

