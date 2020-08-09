package main

import (
	"fmt"
)

func main() {
	fmt.Printf("%T\n", bar()())
}

func bar() func() int {
	return func() int {
		return 451
	}
}
