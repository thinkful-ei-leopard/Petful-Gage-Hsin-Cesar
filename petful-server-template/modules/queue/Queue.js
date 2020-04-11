class _Node {
  constructor(value = null, next = null, prev = null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  } 
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }
  enqueue(item) {
    const node = new _Node(item);
    if (this.first === null) {
      this.first = node;
    }
    if (this.last) {
      this.last.next = node;
      node.prev = this.last;
    }
    this.last = node;
    return this.last;
  }
  dequeue() {
    if(this.first === null){
      return;
    }
    const node =this.first;
    if (node.next === null) {
      this.first = null;
      this.last = null;
      return;
    }
    let newFirst = node.next; //null 
    newFirst.prev = null;
    this.first = newFirst;
    if (node === this.last){
      this.last = null;
    }
    return node.value;
  }
  show() {
    // Return the next item in the queue.
    if (this.first === null) {
      return 'Cannot display first item of an empty queue';
    }
    return this.first.value;
  }

  all() {
    // Return all items in the queue.
    if (this.first === null) {
      return [];
    }
    let all = [];
    let currNode = this.first;
    while (currNode.next !== null) {
      all.push(currNode.value);
      currNode = currNode.next;
    }
    all.push(currNode.value);
    return all;
  }
  isEmpty(){
    if(this.first === null) {
      return true;
    }
    return false;
  }
}

module.exports = Queue;
