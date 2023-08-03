const { Router } = require('express')
const {
  getUsers,
  createUser,
  updateUser,
  deleteUser
} = require('../controllers/users')

const user = Router()

user.get('/', getUsers)

user.put('/:id', updateUser)

user.post('/', createUser)

user.delete('/', deleteUser)

module.exports = user
