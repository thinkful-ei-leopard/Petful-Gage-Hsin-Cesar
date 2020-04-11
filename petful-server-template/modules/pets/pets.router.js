const express = require('express');
const json = require('body-parser').json();

const Pets = require('./pets.service');
const People = require('../people/people.service');

const petsRouter = express.Router();

petsRouter.get('/', (req, res) => {
  // Return all pets currently up for adoption.
  const pet = Pets.get();
  res.json(pet);
});

petsRouter.delete('/', json, (req, res) => {
  // Remove a pet from adoption.
  const pet = Pets.dequeue();
  const adopter = People.dequeue();

  res.json({pet, adopter});
});

module.exports = petsRouter;