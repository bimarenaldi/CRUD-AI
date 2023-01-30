// db.js
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'crud_db'
});

connection.connect((err) => {
    if (err) {
      console.error('Connection failed:', err.message);
    } else {
      console.log('Connected to MySQL database');
    }
  });

module.exports = connection;
