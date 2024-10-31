import java.util.Arrays;

public class LearnArrayClass {
	public static void main(String[] args) {
		int[] arr = new int[5];

		// Inserting elements in array: O(1)
		arr[0] = 1;
		arr[1] = 3;
		arr[2] = 5;
		arr[3] = 6;
		System.out.println(Arrays.toString(arr));

		// Accessing elements in array: O(1)
		System.out.println(arr[0]);

		// Binary search in array: O(log n)
		int index = Arrays.binarySearch(arr, 5);
		System.out.println(index);

		// Sorting array (uses quicksort): O(n log n)
		int[] arr2 = { 5, 3, 1, 6};
		Arrays.sort(arr2);
		System.out.println(Arrays.toString(arr2));

		// Looping over array: O(n)
		for(int i: arr) {
			System.out.println(i);
		}

		// Fill array with a value: O(n)
		Arrays.fill(arr, 10);
		System.out.println(Arrays.toString(arr));
	}
}
