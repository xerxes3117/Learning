import java.util.LinkedList;
import java.util.Queue;

public class LearnLinkedListQueue {
	public static void main(String[] args) {
		Queue<Integer> queue = new LinkedList<>();

		System.out.println("Adding elements to the queue: O(1)");
		queue.offer(12);
		queue.offer(22);
		queue.offer(42);
		System.out.println(queue);

		System.out.println("Removing elements from the queue: O(1)");
		int out = queue.poll();
		System.out.println(out);
		System.out.println(queue);

		System.out.println("Peeking the first element: O(1)");
		int first = queue.peek();
		System.out.println(first);
	}
}
