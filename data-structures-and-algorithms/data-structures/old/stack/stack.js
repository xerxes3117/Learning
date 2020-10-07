class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

//Define the class for Stack
//Contains 3 pieces of info: Head, Tail and Length
class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    //Push method adds a node at the beginning of the stack
    push(value) {
        var newNode = new Node(value)

        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            var temp = this.first;
            this.first = newNode
            this.first.next = temp;
        }
        return ++this.size;
    }
    //pop method deletes one node from the beginning and returns it
    pop() {
        if (!this.first) return null;

        var temp = this.first;
        if (this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}
