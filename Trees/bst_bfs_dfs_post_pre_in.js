//Class to create new node objects
class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

//Class to create new binary search tree objects
class BinarySearchTree {
    constructor(){
        this.root = null;
    }

    //Method to insert a new node in the BST
    insert(value){
        var newNode = new Node(value);
        if(!this.root){
            this.root = newNode;
            return this;
        } else {
            var current = this.root;
            while(true) {
                if(value === current.value) return undefined;
                if(value < current.value) {
                    if(current.left === null) {
                        current.left = newNode;
                        return this;
                    } else {
                        current = current.left;
                    } 
                } else if(value > current.value) {
                    if (current.right === null) {
                        current.right = newNode;
                        return this;
                    } else {
                        current = current.right;
                    }
                }
            }    
        }
    }

    //Method to check if a node is present in the BST
    contains(value){
        if(this.root === null) return false;
        var current = this.root;
        found = false;
        while(current && !found){
            if(value < current.value) {
                current = current.left;
            } else if(value > current.value) {
                current = current.right;
            } else {
                found = true;
            }
        }
        return false;
    }

    //Method to implement Breadth First Search
    BFS(){
        var currentNode = this.root;
        var visited = [];
        var queue = [];
        queue.push(currentNode);

        while(queue.length){
            currentNode = queue.shift();
            visited.push(currentNode.value);
            if(currentNode.left) queue.push(currentNode.left);
            if(currentNode.right) queue.push(currentNode.right);
        }
        return visited;
    }

    //Method to implement PreOrder DFS
    DFS_PreOrder(){
        var visited = [];
        function traverse(node){
            visited.push(node.value);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return visited;
    }

    //Method to implement PostOrder DFS
    DFS_PostOrder(){
        var visited = [];
        function traverse(node){
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            visited.push(node.value)
        }
        traverse(this.root);
        return visited;
    }

    //Method to implement InOrder DFS
    DFS_InOrder(){
        var visited = [];
        function traverse(node){
            if(node.left) traverse(node.left);
            visited.push(node.value)
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return visited;
    }

}

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
console.log(tree);
console.log(tree.BFS());
console.log(tree.DFS_PreOrder());
console.log(tree.DFS_PostOrder());
console.log(tree.DFS_InOrder());