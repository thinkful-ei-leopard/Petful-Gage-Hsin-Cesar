const Queue = require('../queue/Queue');
const store = require('../../store');

// Set up initial data.
// --------------------

const People = new Queue();
store.people.forEach(person => People.enqueue(person));

// --------------------

module.exports = People;
