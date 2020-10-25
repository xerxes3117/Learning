class Node {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        var newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
            return this;
        } else {
            var current = this.root;
            while (true) {
                if (value === current.value) return undefined;
                if (value < current.value) {
                    if (current.left === null) {
                        current.left = newNode;
                        return this;
                    }
                    current = current.left;
                } else if (value > current.value) {
                    if (current.right === null) {
                        current.right = newNode;
                        return this;
                    }
                    current = current.right;
                }
            }
        }
    }
    find(value) {
        if (this.root === null) return false;
        var current = this.root,
            found = false;
        while (current && !found) {
            if (value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else {
                found = true;
            }
        }
        if (!found) return undefined;
        return current;
    }
    //Breadth first search
    BFS() {
        var data = [],
            queue = [],
            node = this.root;

        queue.push(node);
        while (queue.length) {
            node = queue.shift();
            data.push(node.value);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        return data;
    }
    DFSPreOrder() {
        var data = [],
            current = this.root;
        
        function traverse(node){
            data.push(node.value);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(current); //start traversing from the root node
        return data;
    }
    DFSPostOrder() {
        var data = [],
            current = this.root;
        
        function traverse(node){
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            data.push(node.value);
        }
        traverse(current); //start traversing from the root node
        return data;
    }
    DFSInOrder() {
        var data = [],
            current = this.root;
        
        function traverse(node){
            node.left && traverse(node.left); //same as doing - if(node.left) traverse(node.left); 
            data.push(node.value);
            node.right && traverse(node.right);
        }
        traverse(current); //start traversing from the root node
        return data;
    }
}

var tree = new BinarySearchTree();