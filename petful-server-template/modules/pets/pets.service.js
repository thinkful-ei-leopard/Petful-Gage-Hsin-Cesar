const Queue = require('../queue/Queue');
const store = require('../../store');

// Set up initial data.
// --------------------

const animals = {
  cats: new Queue(),
  dogs: new Queue()
};

store.cats.forEach(cat => animals.cats.enqueue(cat));
store.dogs.forEach(dog => animals.dogs.enqueue(dog));

// --------------------

module.exports = {
  getFirst() {
    // Return the pets next in line to be adopted.
    const cat = animals.cats.show();
    const dog = animals.dogs.show();
    return [cat, dog];
  },

  getAll(){
    const cats = animals.cats.all();
    const dogs = animals.dogs.all();
    return {
      cats,
      dogs
    };
  },

  dequeue(type) {
    // Remove a pet from the queue.
    if(type === 'cats'){
      animals.cats.dequeue();
    } 
    else if(type === 'dogs'){
      animals.dogs.dequeue();
    }
  }
};