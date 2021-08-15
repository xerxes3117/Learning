public class Main {
    public static void main(String[] args) {
        MaxHeap newHeap = new MaxHeap(15);

        newHeap.insert(2);
        newHeap.insert(7);
        newHeap.insert(9);
        newHeap.insert(3);
        newHeap.insert(17);
        newHeap.insert(11);
        newHeap.insert(4);
        newHeap.insert(29);
        newHeap.insert(-8);

        newHeap.printHeap();
        System.out.println();

        newHeap.delete();

        System.out.println();
        newHeap.printHeap();

        newHeap.delete();
        newHeap.delete();

        System.out.println();
        newHeap.printHeap();
    }
}
