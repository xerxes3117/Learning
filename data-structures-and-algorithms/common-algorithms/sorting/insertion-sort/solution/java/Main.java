// TC (worst case) : O(N^2)
// TC (average case) : O(N^2)
// TC (best case) : O(N)
// SC : O(1)
import java.util.Arrays;

public class Main {
	public static void main(String[] args) {
		int[] arr = { 5, 2, -13, 1, 9 };
		insertionSort(arr);
		System.out.println(Arrays.toString(arr));
	}

	public static void insertionSort(int[] arr) {
		for(int i = 1; i < arr.length; i++){
			int insertEl = arr[i];
			for(int j = i; j > 0; j--){
				if(arr[j] < arr[j-1]){
					swapElements(j, j-1, arr);
				} else break;
			}
		}
	}

	public static void swapElements(int i, int j, int[] arr) {
		int tmp = arr[i];
		arr[i] = arr[j];
		arr[j] = tmp;
	}
}
