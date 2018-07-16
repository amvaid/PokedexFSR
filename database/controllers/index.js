var model = require('../model');
var helper = require('../../helpers/pokemon.js');

module.exports = {
  search: {
    post: (request, response) => {
      // console.log(request.body);
      console.log('Checking if Data Exists in Database...')
      model.search.get(request.body.pokemon, (err, data) => {
        if(err) {
          throw err;
        } else if(data.length === 0){
          console.log('Getting Data from PokeApi...');
          helper.getPokemonByName(request.body.pokemon, (err, data) => {
            if(err) {
              throw err;
            } else {
              console.log('Adding Data to Database..');
              var requestParameters = [data.id, data.name, data.weight, 
              data.height, data.base_experience, extractType(data.types), data.sprites.front_default];

              model.search.post(requestParameters, (err, data) => {
                if(err) {
                  throw err;
                } else {
                  console.log('Pokemon Added to Database...');
                  response.status(201).send("Pokemon Inserted to MySQL");
                }
              });
            }
          });
        } else {
          console.log('Data Exists! Pulling Information from Database...')
          response.status(201).send("Triggering Get Request");
        }
      });
    },
    get: (request, response) => {
      model.search.get(request.query.pokemon, (err, data) => {
        if(err) {
          throw err;
        } else {
          // console.log(data);
          response.json(JSON.parse(data));
        }
      });
    }
  }
}

var extractType = (typeArr) => {
  var pokemonType = [];
  typeArr.forEach(type => {
    pokemonType.push(type.type.name);
  });
  return pokemonType.join('/');
}