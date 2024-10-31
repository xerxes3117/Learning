import java.util.HashMap;
import java.util.Map;
import java.util.TreeMap;
import java.util.Map.Entry;

public class LearnTreeMap {
	public static void main(String[] args) {
		Map<String, Integer> map = new TreeMap<>();

		// Inserting elements in map: O(log n)
		map.put("One", 1);
		map.put("Three", 3);
		map.put("Five", 5);
		map.put("Six", 6);
		map.put("Eight", 8);
		System.out.println(map); // Map is sorted by keys

		// Removing elements from map: O(log n)
		map.remove("Three");

		// Checking if key exists in map: O(log n)
		if (map.containsKey("One")) {
			map.put("One", 10);
		}

		// Checking if value exists in map: O(n)
		if (map.containsValue(3)) {
			map.put("Three", 3);
		}

		map.putIfAbsent("One", 10);
		map.putIfAbsent("Two", 2);

		// Iterating over map: O(n)
		for (Entry<String, Integer> e : map.entrySet()) {
			System.out.println(e);

			System.out.println(e.getKey());
			System.out.println(e.getValue());
		}

		// Iterating over keys: O(n)
		for (String key : map.keySet()) {
			System.out.println(key);
		}

		// Iterating over values: O(n)
		for (Integer val : map.values()) {
			System.out.println(val);
		}

		if (map.isEmpty()) {
			System.out.println("Map is empty");
		}
	}
}
