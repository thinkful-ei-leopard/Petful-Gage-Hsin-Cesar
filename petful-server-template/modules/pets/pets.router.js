const express = require('express');
const json = require('body-parser').json();
const Pets = require('./pets.service');
const People = require('../people/people.service');

const petsRouter = express.Router();

petsRouter.get('/', (req, res) => {
  // Return all pets currently up for adoption.
  const pet = Pets.getAll();
  res.json(pet);
});

petsRouter.delete('/', json, (req, res) => {
  // Remove one type of pet or both from adoption.
  if(req.body.both){
    Pets.dequeue('cats');
    Pets.dequeue('dogs');
    People.dequeue();
    return res.status(204).send();
  }
  
  Pets.dequeue(`${req.body.type}`);
  People.dequeue();

  return res.status(204).send();
 
  
  
});

module.exports = petsRouter;