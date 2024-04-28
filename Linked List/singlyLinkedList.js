//Class to create new node objects
class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

//Class to create new singly linked list objects
class SinglyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    //Method to add a new node at the end of the linked list
    push(val){
        var newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    //Mathod to remove a node from end of the linked list
    pop() {
        if(!this.head) return undefined;
        var current = this.head;
        var newTail = current;
        while(current.next){
            newTail = current;
            current = current.next;
        }  
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;     
    }

    //Method to remove a node from start of the linked list
    shift(){
        if(!this.head) return undefined;
        var currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if(this.length === 0){
            this.tail = null;
        }
        return currentHead;
    }

    //Method to add a new node to the start of the linked list
    unshift(val){
        var newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
        newNode.next = this.head;
        this.head = newNode;
        }
        this.length++;
        return this;
    }

    //Method to retrieve a node by position in the linked list
    get(index){
        if(index < 0 || index >= this.length) return null;
        var counter = 0;
        var current = this.head;
        while(counter !== index){
            current = current.next;
            counter++;
        }
        return current;
    }

    //Method to change value of a node in the linked list at a given index
    set(index,val){
        var foundNode = this.get(index);
        if(foundNode){
            foundNode.val = val;
            return true;
        }
        return false;
    }

    //Method to add a node at a specific position in the linked list
    insert(index,val){
        if(index < 0 || index > this.length) return false;
        if(index === 0) return !!this.unshift(val);
        if(index === this.length) return !!this.push(val); 

        var newNode = new Node(val);
        var previous = this.get(index-1);
        var after = previous.next;

        previous.next = newNode;
        newNode.next = after;
        this.length++;
        return true;
    }

    //Method to remove a node from a specific position in the linked list
    remove(index){
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0) return this.shift();
        if(index === this.length-1) return this.pop();

        var previousNode = this.get(index-1);
        var removed = previousNode.next;
        var afterNode = removed.next;
        
        previousNode.next = afterNode;
        this.length--;
        return removed;
    }

    //Method to reverse the linked list in place
    reverse(){
        var node = this.head;
        this.head = this.tail;
        this.tail = node;
        var next;
        var previous = null;

        for(var i = 0; i<this.length; i++){
            next = node.next;
            node.next = previous;
            previous = node;
            node = next;
        }
        return this;
    }

    //Mathod to print the linked list in an array format
    print(){
        var arr = [];
        var current = this.head;
        while(current){
            arr.push(current.val)
            current = current.next;
        }
        console.log(arr);
    }
}

var list = new SinglyLinkedList()
console.log(list);
list.push(2);
list.push(4);
list.push(6);
list.push(7);
list.push(8);
list.push(9);
list.print();