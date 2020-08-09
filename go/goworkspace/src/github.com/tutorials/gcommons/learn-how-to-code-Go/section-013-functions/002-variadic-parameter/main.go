package main

import "fmt"

func main() {
	x := sum(2, 3, 4, 5, 6)
	fmt.Println("The total is: ", x)
}

func sum(x ...int) int {
	fmt.Println(x)
	fmt.Printf("%T\n", x)

	sum := 0
	for i, v := range x {
		sum += v
		fmt.Println("index: ", i, "adding,", v, "total: ", sum)
	}
	return sum
}
