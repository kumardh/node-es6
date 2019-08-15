module.exports = (sequelize, Sequelize) => {
    return sequelize.define('employee', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        firstName: Sequelize.STRING,
        lastName: Sequelize.STRING
      },
      {
        freezeTableName: true // Model tableName will be the same as the model name
      }
    )
}