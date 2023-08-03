const express = require('express')
const cors = require('cors')

class Server {
  constructor () {
    this.app = express()
    this.port = process.env.PORT || 3000

    // Endpoints Paths
    this.usersPath = '/api/welcome'

    // Middleware
    this.middleware()

    // add some database connection

    // routes
    this.routes()
  }

  middleware () {
    //  CORS
    this.app.use(cors())

    // body reading
    this.app.use(express.json())

    // public directory
    this.app.use(express.static('public'))
  }

  routes () {
    this.app.use(this.usersPath, require('../routes/users'))
  }

  listen () {
    this.app.listen(this.port, () => {
      console.log('servidor corriendo en puerto', this.port)
    })
  }
}

module.exports = Server
