DROP DATABASE IF EXISTS pokedex;
CREATE DATABASE pokedex;

USE pokedex;

CREATE TABLE pokemon(
  id INT NOT NULL AUTO_INCREMENT,
  pokemonID INT NOT NULL,
  name VARCHAR(50) NOT NULL,
  weight INT NOT NULL,
  height INT NOT NULL,
  base_experience INT NOT NULL,
  type VARCHAR(150),
  sprite VARCHAR(200),
  PRIMARY KEY(id)
);