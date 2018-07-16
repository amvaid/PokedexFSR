const express = require('express');
const bodyParser = require('body-parser');
const helper = require('../helpers/pokemon.js');
const path = require('path');
const db = require('../database');
const router = require('./routes.js');

let app = express();

var port = process.env.PORT || 3000;

module.exports.app = app;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use('/', router);

app.use(express.static('client'));

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
