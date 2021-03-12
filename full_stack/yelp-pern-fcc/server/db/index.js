const { Pool } = require('pg')

//Connection to our database server
const pool = new Pool()

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback)
  },
}