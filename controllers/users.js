const { validationResult } = require('express-validator')

const userValidator = require('../middleware/user-validator')

const handleErrors = (req, res, next) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }
  next()
}

const getUsers = async (req, res) => {
  const query = req.query
  try {
    // code
    res.json({
      msg: 'Success',
      query
    })
  } catch (err) {
    res.status(500).json({
      msg: 'Ha ocurrido un error',
      err
    })
  }
}

const createUser = [
  userValidator,
  handleErrors,
  async (req, res) => {
    const { name, email } = req.body

    try {
      // some function to handle this
      res.status(201).json({
        msg: 'Post API',
        name,
        email
      })
    } catch (err) {
      res.status(500).json({
        msg: 'Ha ocurrido un error',
        err
      })
    }
  }
]

const updateUser = async (req, res) => {
  const id = req.params.id

  try {
    // some function to handle this
    res.json({
      msg: 'Put API - controller',
      id
    })
  } catch (err) {
    res.status(500).json({
      msg: 'Ha ocurrido un error',
      err
    })
  }
}

const deleteUser = async (req, res) => {
  try {
    // some function to handle this
    res.json({
      msg: 'Delete API'
    })
  } catch (err) {
    res.status(500).json({
      msg: 'Ha ocurrido un error',
      err
    })
  }
}

module.exports = {
  getUsers,
  createUser,
  updateUser,
  deleteUser
}
