package main

import "fmt"

var a int

//Creates a new type hotdog whose underlying type is int
type hotdog int

var b hotdog

func main() {
	a = 2
	b = 3
	fmt.Println(a)
	fmt.Printf("%T\n", a)
	fmt.Println(b)
	fmt.Printf("%T\n", b)

	//Convserion
	a = int(b)
	fmt.Println(a)
	fmt.Printf("%T\n", a)
}
