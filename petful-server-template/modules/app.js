const express = require('express');
const cors = require('cors');
const {NODE_ENV, CLIENT_ORIGIN} = require('../config');
const store = require('../store');

const app = express();

app.use(cors({
  origin: CLIENT_ORIGIN
}));

app.use('/people', require('./people/people.router'));
app.use('/pets', require('./pets/pets.router'));

app.get('/', (req, res) => {
  res.send(store);
});

app.use(function errorHandler(error, req, res, next) {
  let response;
  if (NODE_ENV === 'production') {
    response = {error: {message: 'server error'}};
  } else {
    // eslint-disable-next-line no-console
    console.log(error);
    response = {message: error.message, error};
  }
  res.status(500).json(response);
});

module.exports = app;