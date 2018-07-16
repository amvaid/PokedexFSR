const request = require('request');

let getPokemonByName = (pokemonName, callback) => {
  var url = `http://pokeapi.co/api/v2/pokemon/${pokemonName}`;
  request(url, (error, response) => {
    if(error){
      callback(error, null);
    } else {
      callback(null, JSON.parse(response.body));
    }
  });
}


module.exports.getPokemonByName = getPokemonByName;