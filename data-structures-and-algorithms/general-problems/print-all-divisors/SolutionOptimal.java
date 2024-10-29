/**
 * Problem statement
 * You are given an integer ‘n’.
 * Function ‘sumOfDivisors(n)’ is defined as the sum of all divisors of ‘n’.
 * Find the sum of ‘sumOfDivisors(i)’ for all ‘i’ from 1 to ‘n’.
 */

//SC: O(1) TC: O(n)
public class SolutionOptimal {
	public static int sumOfAllDivisors(int n){
			int ans = 0;
			 for (int i = 1; i <= n; i++){
					ans += i * (n / i);
			}

			return ans;
	}

	public static void main(String[] args) {
		int[] testInputs = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };

		for (int input : testInputs) {
			System.out.println("Input: " + input + ", Sum of all divisors: " + sumOfAllDivisors(input));
		}
	}
}