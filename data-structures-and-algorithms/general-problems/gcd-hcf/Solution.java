//Given two integers a and b, write a function lcmAndGcd() to compute their LCM and GCD. The function inputs two integers a and b and returns a list containing their LCM and GCD.

class Solution {

	static Long gcd(Long a, Long b) {
		if (a == 0)
			return b;

		return gcd(b % a, a);
	}

	static Long[] lcmAndGcd(Long a, Long b) {

		Long[] arr = new Long[2];

		Long g = gcd(a, b);
		Long l = (a * b) / g;
		arr[0] = l;
		arr[1] = g;

		return arr;
	}

	public static void main(String[] args) {
		Long[] testInputs = { 4L, 6L, 12L, 15L, 0L, 0L, 0L, 0L, 0L, 0L };

		for (int i = 0; i < testInputs.length; i += 2) {
			Long[] result = lcmAndGcd(testInputs[i], testInputs[i + 1]);
			System.out.println("Input: " + testInputs[i] + ", " + testInputs[i + 1] + ", LCM: " + result[0] + ", GCD: "
					+ result[1]);
		}
	}
};