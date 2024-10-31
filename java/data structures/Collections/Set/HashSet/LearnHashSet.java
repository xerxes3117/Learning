import java.util.HashSet;
import java.util.Set;

public class LearnHashSet {
	public static void main(String[] args) {
		Set<Integer> hst = new HashSet<>();

		//Adding elements to HashSet: O(1)
		hst.add(23);
		hst.add(100);
		hst.add(765);
		hst.add(39);
		
		//Order is not maintained while adding elements
		System.out.println(hst);

		//No duplicates allowed
		hst.add(23);
		hst.add(23);
		System.out.println(hst);

		//Removing elements from HashSet: O(1)
		hst.remove(100);
		System.out.println(hst);

		//Checking if element is present in HashSet: O(1)
		System.out.println(hst.contains(39));

		//Size of HashSet: O(1)
		System.out.println(hst.size());

		//Clearing HashSet: O(1)
		hst.clear();
		System.out.println(hst);

		//Checking if HashSet is empty: O(1)
		System.out.println(hst.isEmpty());
	}
}
