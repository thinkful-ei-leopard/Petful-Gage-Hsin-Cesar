const Queue = require('../queue/Queue');
const store = require('../../store');

// Set up initial data.
// --------------------

const animals = new Queue;

let index = 0;
while (store.cats[index] || store.dogs[index]) {
  animals.enqueue(store.dogs[index]);
  animals.enqueue(store.cats[index]);
  index++;
}

// --------------------

module.exports = {
  get() {
    // Return the pets next in line to be adopted.
    return animals.show();
  },

  dequeue() {
    // Remove a pet from the queue.
    return animals.dequeue();
  }
};