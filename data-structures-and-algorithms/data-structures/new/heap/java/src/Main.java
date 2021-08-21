public class Main {
    public static void main(String[] args) {
        MaxHeap newHeap = new MaxHeap(20);

        newHeap.insert(2);
        newHeap.insert(7);
        newHeap.insert(9);
        newHeap.insert(3);
        newHeap.insert(17);
        newHeap.insert(11);
        newHeap.insert(4);
        newHeap.insert(29);
        newHeap.insert(-8);
        newHeap.insert(99);
        newHeap.insert(104);
        newHeap.insert(21);
        newHeap.insert(16);
        newHeap.insert(-10);
        newHeap.insert(66);
        newHeap.insert(25);
        newHeap.insert(6);

        newHeap.printHeap();
        System.out.println();

        newHeap.delete();

        System.out.println("After Deleting 1 element");
        newHeap.printHeap();
        System.out.println();

        newHeap.delete();
        newHeap.delete();

        System.out.println("After Deleting 2 elements");
        newHeap.printHeap();
    }
}
