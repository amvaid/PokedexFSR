var db = require('../');

module.exports = {
  search: {
    get: (pokemonName, callback) => {
      db.connection.query(`SELECT * FROM pokemon where name = '${pokemonName}'`, (err, rows) => {
        if(err) {
          callback(err, null);
        } else {
          callback(null, rows);
        }
      });
    },

    post: (requestParameters, callback) => {
      db.connection.query(`INSERT INTO pokemon (pokemonID, name, weight, height, base_experience)
        VALUES ('${requestParameters[0]}', '${requestParameters[1]}', '${requestParameters[2]}', '${requestParameters[3]}', '${requestParameters[4]}')`, (err, data) => {
          if(err) {
            callback(err, null);
          } else {
            callback(null, data);
          }
        });
    }
  }
}