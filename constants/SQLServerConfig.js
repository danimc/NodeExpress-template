module.exports = {
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  server: process.env.DB_SERVER,
  database: process.env.DB_DATABASE,
  options: {
    encrypt: false, // Utiliza cifrado para la conexión
    enableArithAbort: true, // Habilita la anulación aritmética para evitar errores en consultas complejas
  },
}
