const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
let app = express();
var port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static('client'));
app.get('/', (request, response) => {
  response.sendFile(__dirname + '/index.html');
});

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
