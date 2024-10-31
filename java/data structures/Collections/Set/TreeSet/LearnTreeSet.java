import java.util.LinkedHashSet;
import java.util.Set;
import java.util.TreeSet;

public class LearnTreeSet {
	public static void main(String[] args) {
		Set<Integer> hst = new TreeSet<>();

		//Adding elements: O(log n)
		hst.add(23);
		hst.add(765);
		hst.add(100);
		hst.add(39);
		hst.add(5);
		
		//Sorting is maintained while adding elements
		System.out.println(hst);

		//No duplicates allowed
		hst.add(23);
		hst.add(23);
		System.out.println(hst);

		//Removing elements: O(log n)
		hst.remove(100);
		System.out.println(hst);

		//Checking if element is present: O(1)
		System.out.println(hst.contains(39));

		//Size: O(1)
		System.out.println(hst.size());

		//Clear: O(1)
		hst.clear();
		System.out.println(hst);

		//Checking if empty: O(1)
		System.out.println(hst.isEmpty());
	}
}
