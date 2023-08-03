const { check } = require('express-validator')

const userValidator = [
  check('name')
    .notEmpty()
    .withMessage('El nombre es obligatorio.')
    .isLength({ min: 3 })
    .withMessage('El nombre debe tener al menos 3 caracteres.'),
  check('email')
    .notEmpty()
    .withMessage('El correo es obligatorio')
    .isEmail()
    .withMessage('Introduzca un correo valido')
]

module.exports = userValidator
