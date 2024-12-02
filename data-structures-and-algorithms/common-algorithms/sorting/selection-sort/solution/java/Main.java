// TC : O(N^2)  
// SC : O(1)
import java.util.Arrays;

public class Main {
	public static void main(String[] args) {
		int[] arr = { 5, 2, 13, 1, 9 };
		selectionSort(arr);
		System.out.println(Arrays.toString(arr));
	}

	public static void selectionSort(int[] arr) {
		for (int i = 0; i < arr.length - 1; i++) {
			int minId = findMinIndex(arr, i);
			if (i != minId) {
				swapElements(i, minId, arr);
			}
		}
	}

	public static int findMinIndex(int[] arr, int st) {
		int minId = st;
		for (int i = st; i < arr.length; i++) {
			if (arr[minId] > arr[i]) {
				minId = i;
			}
		}
		return minId;
	}

	public static void swapElements(int i, int j, int[] arr) {
		int tmp = arr[i];
		arr[i] = arr[j];
		arr[j] = tmp;
	}
}
