const coffees = (connection, Sequelize) => {
    return connection.define('coffees', {
        id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
        title: { type: Sequelize.STRING, allowNull: false },
        description: { type: Sequelize.STRING },
    }, {
        defaultScope: {
            attributes: { exclude: ['deletedAt'] }
        }
    }, { paranoid: true })
}

module.exports = coffees
