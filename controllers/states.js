const states = require('../states')

const getAllStates = (req, res) => {
    return res.render('index', {states})
}


const getStateByCapital = (req, res) => {
    const { capital } = req.params

    const foundState = states.filter((state) =>  state.capital === capital)

    return res.send(foundState)
}




module.exports = { getAllStates, getStateByCapital }