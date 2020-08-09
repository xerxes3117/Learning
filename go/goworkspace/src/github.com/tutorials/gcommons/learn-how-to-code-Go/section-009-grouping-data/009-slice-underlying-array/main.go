package main

import (
	"fmt"
)

func main() {
	x := []int{42, 43, 44, 45, 46, 47, 48, 49, 50, 51}
	fmt.Println(x)

	y := append(x, 43, 43, 43, 43, 43, 43, 44) // new underlying array allocated

	fmt.Println(x)
	fmt.Println(y)

	a := []int{42, 43, 44, 45, 46, 47, 48, 49, 50, 51}
	fmt.Println(x)

	b := append(a[:2], a[5:]...) // the same underlying array (as a) stores the value of the new slice

	fmt.Println(a)
	fmt.Println(b)
}
