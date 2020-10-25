package main

import (
	"fmt"
)

func main() {
	fn := foo()

	fmt.Println(fn(10))
}

func foo() func(a int) int {
	return func(a int) int {
		tot := 1
		for ; a > 0; a-- {
			tot *= a
		}
		return tot
	}
}
