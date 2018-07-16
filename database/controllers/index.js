var model = require('../model');
var helper = require('../../helpers/pokemon.js');

module.exports = {
  search: {
    post: (request, response) => {
      // console.log(request.body);
      model.search.get(request.body.pokemon, (err, data) => {
        if(err) {
          throw err;
        } else if(data.length === 0){
          helper.getPokemonByName(request.body.pokemon, (err, data) => {
            if(err) {
              throw err;
            } else {
              // console.log(JSON.parse(data).id);
              var requestParameters = [data.id, data.name, data.weight, data.height, data.base_experience];
              model.search.post(requestParameters, (err, data) => {
                if(err) {
                  throw err;
                } else {
                  response.status(201).send("Pokemon Inserted to MySQL");
                }
              })
            }
          });
        }
      });
    }
  }
}