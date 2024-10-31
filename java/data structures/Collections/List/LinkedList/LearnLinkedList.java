import java.util.Iterator;
import java.util.LinkedList;
import java.util.List;

public class LearnLinkedList {
	public static void main(String[] args) {
		List<Integer> list = new LinkedList<>();

		// Add to end of list : O(1)
		list.add(1);
		list.add(2);
		System.out.println(list);

		// Add to specific index : O(n)
		list.add(1, 3);
		System.out.println(list);

		// Add one list to another : O(n)
		List<Integer> list2 = new LinkedList<>();
		list2.add(4);
		list2.add(5);
		list.addAll(list2);
		System.out.println(list);

		// Get element at index : O(1)
		System.out.println(list.get(2));

		// Remove element at index : O(n)
		list.remove(2);
		System.out.println(list);

		// Remove element by value : O(n)
		list.remove(Integer.valueOf(4));
		System.out.println(list);

		// Clear list : O(1)
		list.clear();
		System.out.println(list);

		list.add(1);
		list.add(2);
		list.add(3);

		// Update element at index : O(1)
		list.set(2, 555);
		System.out.println(list);

		// Check if list contains element : O(n)
		System.out.println(list.contains(555));

		// Iterate through list (using for loop) : O(n)
		for (int i = 0; i < list.size(); i++) {
			System.out.println("Iterating using for loop: " + list.get(i));
		}

		// Iterate through list (using for-each) : O(n)
		for (Integer el : list) {
			System.out.println("Iterating using for-each: " + el);
		}

		// Iterate through list (using iterator) : O(n)
		Iterator<Integer> it = list.iterator();
		while (it.hasNext()) {
			System.out.println("Iterating using iterator: " + it.next());
		}
	}
}