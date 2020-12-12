const coffees = (connection, Sequelize) => {
    return connection.define('coffees', {
        id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
        title: { type: Sequelize.STRING },
        description: { type: Sequelize.STRING },
        ingredients : { type: Sequelize.STRING },
    }, { paranoid: true })
}

module.exports = coffees
