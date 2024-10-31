import java.util.Objects;

public class Student implements Comparable<Student> {
	String name;
	int rollNo;

	public Student(String name, int rollNo) {
		this.name = name;
		this.rollNo = rollNo;
	}

	@Override
	public String toString() {
		return "Student{" + "name='" + name + '\'' + ", rollNo=" + rollNo + '}';
	}

	@Override
	public int hashCode() {
		return Objects.hash(rollNo);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj) {
			return true;
		}
		if (obj == null || getClass() != obj.getClass()) {
			return false;
		}
		Student student = (Student) obj;
		return rollNo == student.rollNo;
	}

	@Override
	public int compareTo(Student o) {
		return this.rollNo - o.rollNo;
	}
}
