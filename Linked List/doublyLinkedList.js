//Class to create new node objects
class Node {
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

//Class to create new doubly linked list objects
class DoublyLinkedList {
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
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    //Mathod to remove a node from end of the linked list
    pop(){
        if(!this.head) return undefined;
        var poppedNode = this.tail;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }
        this.length--;
        return poppedNode;
    }

    //Method to remove a node from start of the linked list
    shift(){
        if(!this.head) return undefined;
        var oldHead = this.head;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead; 
    }

    //Method to add a new node to the start of the linked list
    unshift(val){
        var newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
        this.head.prev = newNode;
        newNode.next = this.head;
        this.head = newNode;
        }
        this.length++;
        return this;
    }

    //Method to retrieve a node by position in the linked list
    get(index){
        if(index < 0 || index >= this.length) return null;
        var counter, current;
        if(index <= this.length/2){
            counter = 0;
            current = this.head;
            while(counter !== index){
                current = current.next;
                counter++;
            }
        } else {
            counter = this.length-1;
            current = this.tail;
            while(counter !== index){
                current = current.prev;
                counter--;
            }
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
        var beforeNode = this.get(index-1);
        var afterNode = beforeNode.next;

        beforeNode.next = newNode;
        newNode.prev = beforeNode;
        newNode.next = afterNode;
        afterNode.prev = newNode;
        this.length++;
        return true;
    }

    //Method to remove a node from a specific position in the linked list
    remove(index){
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0) return this.shift();
        if(index === this.length-1) return this.pop();

        var removedNode = this.get(index);
        var beforeNode = removedNode.prev;
        var afterNode = removedNode.next;

        beforeNode.next = afterNode;
        afterNode.prev = beforeNode;
        removedNode.next = null;
        removedNode.prev = null;
        this.length--;
        return removedNode;
    }

}

var list = new DoublyLinkedList();
list.push(13);
list.push(14);
list.push(15);
list.push(17);
console.log(list);
list.set(0,5);
console.log(list);
console.log(list.get(3));
console.log(list.insert(2,33));
list.remove(1);
console.log(list);