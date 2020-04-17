// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed FIFO
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;
// Implement a 'peek' method in this Queue class.
// Peek should return the last element (the next
// one to be returned) from the queue *without*
// removing it.
class Queue{
    constructor(){
        this.data = [];
    }
    add(record){
        this.data.unshift(record);
    }
    remove(record){
        return this.data.pop(record);
    }
    peek(record){
        return this.data[this.data.length-1];
    }
}
module.exports = Queue;