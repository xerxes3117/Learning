/**
 * @todo Add documentation and time complexity of all operations
 * @todo Test with duplicate values
 */
public class MaxHeap {
    private int[] heap;
    private int size;
    private int maxSize;

    public MaxHeap(int maxSize) {
        this.size = 0;
        this.maxSize = maxSize;
        this.heap = new int[maxSize];
    }

    public void insert(int val) {
        if (size == maxSize) {
            return;
        }
        heap[size++] = val;
        shiftUp(size - 1);
    }

    public int delete() {
        if (size == 0) {
            return -1;
        }
        int out = heap[0];
        swap(0, size - 1);
        size--;
        shiftDown(0);
        return out;
    }

    public void shiftUp(int pos) {
        int parentPos = parent(pos);
        if (heap[parentPos] >= heap[pos]) {
            return;
        }
        swap(parentPos, pos);
        shiftUp(parentPos);
    }

    public void shiftDown(int pos) {
        if(pos > size/2){
            return;
        }
        int maxPos = pos;

        // First condition is added to make sure we don't swap with deleted element
        // The deleted element is currently present at last position in heap
        if (leftChild(pos) < size && heap[maxPos] < heap[leftChild(pos)]) {
            maxPos = 2 * pos + 1;
        }
        if (rightChild(pos) < size &&  heap[maxPos] < heap[rightChild(pos)]) {
            maxPos = 2 * pos + 2;
        }
        if (pos != maxPos) {
            swap(pos, maxPos);
            shiftDown(maxPos);
        }
    }

    public void swap(int pos1, int pos2) {
        int temp = heap[pos1];
        heap[pos1] = heap[pos2];
        heap[pos2] = temp;
    }

    public int parent(int pos) {
        return pos / 2;
    }

    public int leftChild(int pos) {
        return 2 * pos + 1;
    }

    public int rightChild(int pos) {
        return 2 * pos + 2;
    }

    public void printHeap() {
        for (int i = 0; i < size; i++) {
            System.out.print("   " + heap[i]);
        }
        System.out.println();
        for (int i = 0; i <= size / 2; i++) {
            System.out.print(
                    " PARENT : " + heap[i]
                            + " LEFT CHILD : " + heap[2 * i + 1]
                            + " RIGHT CHILD :" + heap[2 * i + 2]);
            System.out.println();
        }
    }
}
