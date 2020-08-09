package main

import "fmt"

func main() {
	x1 := []string{"James", "Bond", "Shaken, not stirred"}
	x2 := []string{"Miss", "Moneypenny", "Helloooooo, James."}

	xx := [][]string{x1, x2}
	fmt.Println(xx)

	for i, v := range xx {
		fmt.Println("record: ", i)
		for j, w := range v {
			fmt.Printf("\t index position: %v \t value: \t %v \n", j, w)
		}
	}
}
