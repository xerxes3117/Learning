/**
 * @todo add jsDoc comments
 */

const Node = require('./node.js')

class SinglyLinkedList {
    constructor(){
        this.head = null;
    }

    getHead(){
        return this.head;
    }

    printList() {
        if(this.isEmpty()) {
            console.log("List if empty");
            return false;
        }
        let tmp = this.head;
        let listStr = "";
        while(tmp != null){
            listStr += tmp.value + "->";
            tmp = tmp.next;
        }
        console.log(listStr + "null");
        return true;
    }

    insertAtHead(value){
        let tmpNode = new Node(value);
        tmpNode.next = this.head;
        this.head = tmpNode;
        return this;
    }

    isEmpty(){
        return this.head == null;
    }

    insertAtTail(value){
        let tmpNode = new Node(value);
        
        if(this.isEmpty()){
            this.head = tmpNode;
            return this;
        }
        let tmp = this.head;
        while(tmp.next != null){
            tmp = tmp.next;
        }
        tmp.next = tmpNode;
        return this;
    }

    removeFromHead(){
        if(this.isEmpty()) return "List is empty";
        
        let tmpHead = this.head;
        this.head = this.head.next;
        tmpHead.next = null;
        return tmpHead;
    }

    removeFromTail(){
        if(this.isEmpty()) return "List is empty";

        let curr = this.head;
        let prev = null;
        while(curr.next != null){
            prev = curr;
            curr = curr.next;
        }
        prev.next = null;
        return curr;
    }

    getFromIndex(index){
        if(this.isEmpty()) return "List is empty";

        let counter = 0;
        let curr = this.head;
        while(counter < index && curr != null){
            counter++;
            curr = curr.next;
        }
        return curr != null ? curr : "Out of bounds";
    }

    removeFromIndex(index){
        if(this.isEmpty()) return "List is empty";
        if(index === 0) return this.removeFromHead();

        let prev = this.getFromIndex(index - 1);
        if(prev.next == null) {
            return "Out of bounds"
        }
        let curr = prev.next;
        prev.next = prev.next.next
        return curr;
    }
}

let L1 = new SinglyLinkedList();
//Testing isEmpty
// console.log("testing isEmpty ........................................................................")
// console.log(L1.isEmpty());

//Testing printList
// console.log("testing printList .......................................................................")
// console.log(L1.printList());

//Testing insertAtHead
console.log("testing insertAtHead .....................................................................")
L1.insertAtHead(4)
L1.insertAtHead(3)
L1.insertAtHead(2)
L1.insertAtHead(1)
console.log(L1.printList());

//Testing insertAtTail
console.log("Testing insertAtTail .......................................................................")
L1.insertAtTail(5)
L1.insertAtTail(6)
L1.insertAtTail(7)
L1.insertAtTail(8)
console.log(L1.printList());

//Testing removeFromHead
// console.log("testing removeFromHead .......................................................................")
// console.log(L1.removeFromHead());
// console.log(L1.removeFromHead());
// console.log(L1.printList());

//Testing removeFromTail
// console.log("testing removeFromTail ......................................................................")
// console.log(L1.removeFromTail());
// console.log(L1.removeFromTail());
// console.log(L1.printList());

//Testing getFromIndex
// console.log("testing getFromIndex ...........................................................................")
// console.log(L1.getFromIndex(0));
// console.log(L1.getFromIndex(1));
// console.log(L1.getFromIndex(3));
// console.log(L1.getFromIndex(5));

//Testing removeFromIndex
// console.log("testing removeFromIndex ......................................................................")
// console.log(L1.removeFromIndex(0))
// console.log(L1.printList())
// console.log(L1.removeFromIndex(1))
// console.log(L1.printList())
// console.log(L1.removeFromIndex(3))
// console.log(L1.printList());

//Iterating through linked list in reverse order using recursion
let arr = [];
function iterateInReverse(head, arr){
    if(head != null){
        iterateInReverse(head.next, arr)
        arr.push(head.value);
    }
}
console.log("testing iterateInReverse ........................................................................")
iterateInReverse(L1.getHead(), arr)
console.log(arr)