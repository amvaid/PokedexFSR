const mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'pokedex'
});

connection.connect((err) => {
  if(err) {
    throw err;
  } else {
    console.log('Connected to Pokedex DB!');
  }
});

module.exports.connection = connection;