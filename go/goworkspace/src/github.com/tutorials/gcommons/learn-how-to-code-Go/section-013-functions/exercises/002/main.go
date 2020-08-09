package main

import "fmt"

func main() {
	a := []int{1, 2, 3, 4, 5}
	s1 := foo(a...)
	s2 := bar(a)

	fmt.Println(s1)
	fmt.Println(s2)
}

func foo(xi ...int) int {
	sum := 0
	for _, v := range xi {
		sum += v
	}
	return sum
}

func bar(yi []int) int {
	sum := 0
	for _, v := range yi {
		sum += v
	}
	return sum
}
