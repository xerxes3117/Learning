import java.util.Collections;
import java.util.Iterator;
import java.util.PriorityQueue;

/**
 * @todo Test if priorityQueue.remove() also correctly removes element not at top
 * @todo Add time complecities of all oprations
 */
public class MaxHeap_using_library {

    public static void main(String[] args) {
        // Creating a max heap using priority queue
        // This creates a min heap by default. We use Collections.reverseOrder() to create a max heap
        PriorityQueue<Integer> maxHeap = new PriorityQueue<Integer>(Collections.reverseOrder());

        //Adding elements to priority queue
        maxHeap.add(12);
        maxHeap.add(5);
        maxHeap.add(3);
        maxHeap.add(-19);
        maxHeap.add(17);
        maxHeap.add(99);

        //Printing the highest priority element
        System.out.println("Top priority element in priority queue: " + maxHeap.peek());

        //Printing priority queue elements
        System.out.println("Elements in priority queue: ");
        Iterator<Integer> itrMaxHeap = maxHeap.iterator();
        while(itrMaxHeap.hasNext())
            System.out.println(itrMaxHeap.next());

        //Deleting the top priority element from priority queue
        maxHeap.poll();
        System.out.println("After deleting largest element :");
        Iterator<Integer> itrMaxHeap2 = maxHeap.iterator();
        while(itrMaxHeap2.hasNext())
            System.out.println(itrMaxHeap2.next());

        // Removing 30 using remove()
        maxHeap.remove(3);
        System.out.println("after removing 3 with" + " remove function:");
        Iterator<Integer> itr3 = maxHeap.iterator();
        while (itr3.hasNext())
            System.out.println(itr3.next());

        // Check if an element is present using contains()
        boolean b = maxHeap.contains(20);
        System.out.println("Priority queue contains 20 " + "or not?: " + b);

        // Getting objects from the queue using toArray()
        // in an array and print the array
        Object[] arr = maxHeap.toArray();
        System.out.println("Value in array: ");
        for (int i = 0; i < arr.length; i++)
            System.out.println("Value: " + arr[i].toString());
    }

}
