//Find the number of digits of ‘n’ that evenly divide ‘n’.

public class Solution {
    public static int countDigits(int n) {
        int count = 0;
        int tmp = n;

        while (tmp > 0) {
            int digit = tmp % 10;

            if (digit != 0 && n % digit == 0) {
                count++;
            }
            tmp = tmp / 10;
        }
        return count;
    }

		public static void main(String[] args) {
			int[] testInputs = {123, 1012, 111, 0};

			for (int input : testInputs) {
					System.out.println("Input: " + input + ", Count: " + countDigits(input));
			}
	}
}