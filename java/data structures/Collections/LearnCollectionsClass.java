import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

public class LearnCollectionsClass {
	public static void main(String[] args) {
		List<Integer> list = new ArrayList<>();

		list.add(4);
		list.add(50);
		list.add(3);
		list.add(10);
		list.add(3);
		list.add(3);
		list.add(3);

		// Get the min and max element from the list: O(n)
		System.out.println("Min element: " + Collections.min(list));
		System.out.println("Max element: " + Collections.max(list));

		// Get frequency of an element in the list: O(n)
		System.out.println("Frequency of 3: " + Collections.frequency(list, 3));

		// Sort the list: O(nlogn)
		Collections.sort(list, Comparator.reverseOrder());
		System.out.println("Sorted list: " + list);

		List<Student> students = new ArrayList<>();

		students.add(new Student("Charlie", 38));
		students.add(new Student("Bob", 44));
		students.add(new Student("David", 10));
		students.add(new Student("Alice", 25));

		// Sort the list of students: O(nlogn)
		Collections.sort(students);
		System.out.println("Sorted students: " + students);

		// Using Comparator to sort the list of students: O(nlogn)
		Collections.sort(students, new Comparator<Student>() {
			@Override
			public int compare(Student o1, Student o2) {
				return o1.name.compareTo(o2.name);
			}
		});
		System.out.println("Sorted students by name: " + students);

		// Using lambda expression to sort the list of students: O(nlogn)
		Collections.sort(students, (o1, o2) -> o1.name.compareTo(o2.name));
		System.out.println("Sorted students by name: " + students);
	}
}
