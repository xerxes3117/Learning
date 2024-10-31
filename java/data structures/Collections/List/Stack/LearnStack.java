import java.util.Stack;

public class LearnStack {
	public static void main(String[] args) {
		Stack<String> animals = new Stack<>();

		//Push item to top of stack
		animals.push("cat");
		animals.push("dog");
		animals.push("horse");
		System.out.println(animals);

		//Get item at top of stack
		System.out.println(animals.peek());

		//Remove item from top of stack
		animals.pop();
		System.out.println(animals);
	}
}
