//Class to create new node objects
class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

//Class to create new queue objects
class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    //Method to add a node at the beggining of the queue
    enqueue(val){
        var newNode = new Node(val);
        if(!this.first) {
            this.first = newNode;
            this.last = this.first;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.size++;
        return this;
    }

    //Method to remove the most recent added node fron the queue
    dequeue(){
        if(!this.first) return null;
        var removedNode = this.first;
        if(this.first === this.last){
            this.last = null;
        }
        this.first = removedNode.next;
        this.size--;
        return removedNode.value;
    }
}

var queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
console.log(queue);

