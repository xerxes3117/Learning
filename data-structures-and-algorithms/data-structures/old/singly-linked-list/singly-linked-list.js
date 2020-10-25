//Define the class for individual nodes
//Each Node contains 2 pieces of info: value (data stored in node) and next (reference to the next node)
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

//Define the class for Singly Linked List
//Contains 3 pieces of info: Head, Tail and Length
class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    //Push method creates a new node, pushes it to the end of linked list and returns the updated list
    push(value) {
        var newNode = new Node(value)
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    //Pop method deletes the last item in the linked list an returns it
    pop() {
        if (!this.head) return undefined;

        var current = this.head;
        var newTail = current;

        while (current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    //Shift method deletes one node from the beginning and returns it
    shift() {
        if (!this.head) return undefined;

        var oldHead = this.head;
        this.head = oldHead.next;
        this.length--;
        oldHead.next = null;
        if (this.length === 0) {
            this.tail = null;
        }
        return oldHead;
    }
    //Unshift method adds a node at the beginning of the linked list
    unshift(value) {
        var newNode = new Node(value)

        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    //Get method returns the node at specified index
    get(index) {
        if (index < 0 || index > this.length) return null;

        var counter = 0;
        var current = this.head;
        while (counter !== index) {
            current = current.next;
            counter++;
        }
        return current;
    }
    //Set method updates the value of node at provided index index
    set(index, value) {
        var foundNode = this.get(index);
        if (foundNode) {
            foundNode.value = value;
            return true;
        }
        return false;
    }
    //Insert method inserts a new node at the specified index
    insert(index, value) {
        if (index < 0 || index > this.length) return false;
        if (index === 0) return !!this.unshift(value);
        if (index === this.length) return !!this.push(value);

        var newNode = new Node(value);
        var prevNode = this.get(index - 1);
        var nextNode = prevNode.next;
        prevNode.next = newNode;
        newNode.next = nextNode;
        this.length++;
        return true;
    }
    //Remove method removes the node at the specified index
    remove(index) {
        if (index < 0 || index > this.length) return undefined;
        if (index === 0) return this.shift();
        if (index === this.length) return this.pop();

        var prevNode = this.get(index - 1);
        var remNode = prevNode.next;
        prevNode.next = remNode.next;
        this.length--;
        return remNode;
    }
    //Reverse method reverses the original singly linked list(doesn't create a copy)
    reverse() {
        var node = this.head;
        this.head = this.tail;
        this.tail = node;
        var next;
        var prev = null;

        for (var i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }
}
