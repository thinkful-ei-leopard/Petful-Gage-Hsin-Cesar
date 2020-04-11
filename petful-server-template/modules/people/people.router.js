const express = require('express');
const json = require('body-parser').json();

const People = require('./people.service');

const peopleRouter = express.Router();

peopleRouter.get('/', (req, res) => {
  // Return all the people currently in the queue.
  res.json(People.all());
});

peopleRouter.post('/', json, (req, res) => {
  let {newPerson} = req.body;
  // Add a new person to the queue.'
  People.enqueue(newPerson);
  res.json(People.all());
});

peopleRouter.delete('/', (req, res) => {
  // Remove a person from the queue
  res.json(People.dequeue());
});

module.exports = peopleRouter;
