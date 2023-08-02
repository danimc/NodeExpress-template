const sql = require('mssql')
const { Sequelize } = require('sequelize')
const config = require('../constants/SQLServerConfig')

const { database, user, password, server } = config

const dbConnection = async () => {
  try {
    await sql.connect(config)

    console.log('Base de datos conectada satisfactoriamente :) ')
  } catch (err) {
    console.err(err)
    throw new Error('Error al intentar conectarse a la base de datos')
  }
}

const db = new Sequelize(database, user, password, {
  host: server,
  dialect: 'mssql',
  // logging: false
  dialectOptions: {
    options: {
      encrypt: false,
      enableArithAbort: true, // Habilitar anulación aritmética
    },
  },
})

module.exports = { dbConnection, db }
