package main

import (
	"fmt"
)

func main() {
	//Creating a new map using make
	grades := make(map[string]float32)

	grades["Timmy"] = 42
	grades["Jess"] = 92
	grades["Sam"] = 67

	//Accessing map element
	timsGrade := grades["Timmy"]
	fmt.Println(timsGrade)

	//Deleting from map
	delete(grades, "Timmy")
	fmt.Println(grades)

	//Iterate through a map
	for key, value := range grades {
		fmt.Println(key, ":", value)
	}
}
