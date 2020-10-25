package main

import "fmt"

var r int
var s float64

var a int8 = -128

//var b int8 = -129 //won't work

var c uint8 = 255

//var d uint8 = 256 //won't work

func main() {
	x := 42
	y := 42.3434

	//Below 2 statements won't work as we can't assign decimal value to int
	//r = 42.3434
	//r = y

	fmt.Printf("%T\n", x)
	fmt.Printf("%T\n", y)
	fmt.Printf("%T\n", r)
	fmt.Printf("%T\n", s)
}
