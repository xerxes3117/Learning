// TC (worst case) : O(N^2)
// TC (average case) : O(N^2)
// TC (best case) : O(N)
// SC : O(1)
import java.util.Arrays;

public class Main {
	public static void main(String[] args) {
		int[] arr = { 5, 2, 13, 1, 9 };
		bubbleSort(arr);
		System.out.println(Arrays.toString(arr));
	}

	public static void bubbleSort(int[] arr) {
		for(int i = arr.length - 1; i > 0; i--){
			int swaps = 0;
			for(int j = 0; j < i; j++){
				if(arr[j] > arr[j+1]) {
					swapElements(j, j+1, arr);
					swaps++;
				}
			}
			if(swaps == 0) break;
		}
	}

	public static void swapElements(int i, int j, int[] arr) {
		int tmp = arr[i];
		arr[i] = arr[j];
		arr[j] = tmp;
	}
}
