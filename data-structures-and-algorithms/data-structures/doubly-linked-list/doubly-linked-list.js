class Node {
    constructor(val) {
        this.value = val;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
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
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    //Pop method deletes the last item in the linked list an returns it
    pop() {
        if (!this.head) return undefined;

        var oldTail = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = oldTail.prev;
            this.tail.next = null;
            oldTail.next = null;
        }
        this.length--;
        return oldTail;
    }
    //Shift method deletes one node from the beginning and returns it
    shift() {
        if (!this.head) return undefined;

        var oldHead = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;
            this.head.next = null;
            oldHead.prev = null;
        }
        this.length--;
        return oldHead;
    }
    //Unshift method adds a node at the beginning of the linked list
    unshift(value) {
        var newNode = new Node(value)

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this
    }
    //Get method returns the node at specified index
    get(index) {
        if (index < 0 || index > this.length) return null;

        var counter, current;
        if (index <= this.length / 2) {
            counter = 0;
            current = this.head;
            while (counter !== index) {
                current = current.next;
                counter++;
            }
            return current;
        } else {
            counter = this.length - 1;
            current = this.tail;
            while (counter !== index) {
                current = current.prev;
                counter--;
            }
            return current;
        }
    }
    //Set method updates the node at specified location
    set(index, value){
        var foundNode = this.get(index);

        if(foundNode != null){
            foundNode.val = value;
            return true;
        }
        return false;
    }
    //Insert method inserts a node at a certain location
    insert(index, value){
        if(index < 0 || index > this.length) return false;
        if(index ===  0) return this.unshift(value)
        if(index === this.length) return !!this.push(value)

        var newNode = new Node(value);
        var beforeNode = this.get(index-1);
        var afterNode = beforeNode.next;

        beforeNode.next = newNode, newNode.prev = beforeNode;
        newNode.next = afterNode, afterNode.prev = newNode;
        
        this.length++;
        return true;
    }
    //Remove removes the node at a specified location
    remove(index){
        if(index < 0 || index >= this.length) return false;
        if(index ===  0) return this.shift(value)
        if(index === this.length -1) return !!this.pop(value)

        var removedNode = this.get(index);
        removedNode.prev.next = removedNode.next;
        removedNode.next.prev = removedNode.prev;
        removedNode.next = null;
        removedNode.prev = null;
        this.length--;
        return removedNode;
    }
}