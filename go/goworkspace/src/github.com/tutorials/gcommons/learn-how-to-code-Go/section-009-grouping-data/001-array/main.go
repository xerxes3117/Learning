//Notes
//1) Length is part of array's type

package main

import "fmt"

func main() {
	var x [5]int
	var y [6]int   //y has different type from x because its length is different
	fmt.Println(x) // [0 0 0 0 0]

	x[3] = 42
	fmt.Println(x)             // [0 0 0 42 0]
	fmt.Println(len(x))        // 5
	fmt.Printf("%T\t%T", x, y) // 5
}
