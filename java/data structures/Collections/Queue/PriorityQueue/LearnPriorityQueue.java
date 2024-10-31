import java.util.Comparator;
import java.util.PriorityQueue;
import java.util.Queue;

class LearnPriorityQueue {
	public static void main(String[] args) {
		System.out.println("Min heap using priority queue:");
		Queue<Integer> minHeap = new PriorityQueue<>();

		// Add elements to the heap: O(log n)
		minHeap.offer(22);
		minHeap.offer(688);
		minHeap.offer(42);
		minHeap.offer(2);
		minHeap.offer(267);
		System.out.println(minHeap);

		// Remove the root element: O(log n)
		minHeap.poll();
		System.out.println(minHeap);
		
		// Peek the root element: O(1)
		System.out.println(minHeap.peek());

		System.out.println("Max heap using priority queue:");
		Queue<Integer> maxHeap = new PriorityQueue<>(Comparator.reverseOrder());

		maxHeap.offer(22);
		maxHeap.offer(688);
		maxHeap.offer(42);
		maxHeap.offer(2);
		maxHeap.offer(267);
		System.out.println(maxHeap);

		maxHeap.poll();
		System.out.println(maxHeap);
		
		System.out.println(maxHeap.peek());
	}
}