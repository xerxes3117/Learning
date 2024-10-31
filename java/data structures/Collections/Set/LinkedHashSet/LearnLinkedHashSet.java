import java.util.HashSet;
import java.util.LinkedHashSet;
import java.util.Set;

public class LearnLinkedHashSet {
	public static void main(String[] args) {
		Set<Integer> hst = new LinkedHashSet<>();

		//Adding elements: O(1)
		hst.add(23);
		hst.add(100);
		hst.add(765);
		hst.add(39);
		
		//Order is maintained while adding elements
		System.out.println(hst);

		//No duplicates allowed
		hst.add(23);
		hst.add(23);
		System.out.println(hst);

		//Removing elements: O(1)
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
