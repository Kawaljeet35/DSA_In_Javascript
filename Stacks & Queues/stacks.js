//Class to create new node objects
class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

//Class to create new stack objects
class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    //Method to add a node at the beggining of the stack
    push(val){
        var newNode = new Node(val);
        if(!this.first) {
            this.first = newNode;
            this.last = this.first;
        } else {
            var temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        this.size++;
        return this;
    }

    //Method to remove the most recent added node fron the stack
    pop(){
        if(!this.first) return null;
        var removedNode = this.first;
        if(this.first === this.last){
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return removedNode.value;
    }
}

var stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
console.log(stack);
stack.pop();
console.log(stack);
stack.pop();
console.log(stack);