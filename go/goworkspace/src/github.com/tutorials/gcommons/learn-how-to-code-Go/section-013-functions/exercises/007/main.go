package main

import (
	"fmt"
)

func main() {
	ma := func(a float64) float64 {
		return 3.04 * a
	}

	fmt.Println(ma(25.6))
}
