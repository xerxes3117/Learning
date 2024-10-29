/**
 * Problem statement
 * You are given an integer ‘n’.
 * Function ‘sumOfDivisors(n)’ is defined as the sum of all divisors of ‘n’.
 * Find the sum of ‘sumOfDivisors(i)’ for all ‘i’ from 1 to ‘n’.
 */


//SC: O(1) TC: O(n*sqrt(n))
public class Solution1 {
	public static int sumOfAllDivisors(int n) {
		int sum = 0;
		for (int i = 1; i <= n; i++) {
			sum += getDivisorsSum(i);
		}

		return sum;
	}

	public static int getDivisorsSum(int n) {
		int sum = 0;
		int sqrtN = (int) Math.sqrt(n);

		for (int i = 1; i <= sqrtN; i++) {
			if (n % i == 0) {
				sum += i;
				if (i != n / i) {
					sum += n / i;
				}
			}
		}

		return sum;
	}
	public static void main(String[] args) {
		int[] testInputs = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };

		for (int input : testInputs) {
			System.out.println("Input: " + input + ", Sum of all divisors: " + sumOfAllDivisors(input));
		}
	}
}