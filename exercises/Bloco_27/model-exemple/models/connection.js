const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  user: 'walves',
  password: 'F@by34214077',
  host: 'localhost',
  database: 'model_example'
})

module.exports = connection;
