import java.util.HashSet;
import java.util.Set;

public class CustomSet {
	public static void main(String[] args) {
		Set<Student> hStudent = new HashSet<>();

		hStudent.add(new Student("Anuj", 22));
		hStudent.add(new Student("Ramesh", 25));
		hStudent.add(new Student("Suresh", 11));
		hStudent.add(new Student("Ram", 22)); // Duplicate element by rollNo

		System.out.println(hStudent);
	}
}
