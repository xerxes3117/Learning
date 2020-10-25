package main

import (
	"fmt"
)

func main() {
	c := make(chan int)
	cr := make(<-chan int) // receive
	cs := make(chan<- int) // send

	fmt.Println("-----")
	fmt.Printf("c\t%T\n", c)
	fmt.Printf("cr\t%T\n", cr)
	fmt.Printf("cs\t%T\n", cs)

	// general to specific assigns
	cr = c
	cs = c

	// specific to specific doesn't assign
	//cs = cr
	// specific to specific doesn't assign
	//cs = cr

	// general to specific converts
	fmt.Println("-----")
	fmt.Printf("c\t%T\n", (<-chan int)(c))
	fmt.Printf("c\t%T\n", (chan<- int)(c))

	// specific to general doesn't convert
	//fmt.Println("-----")
	//fmt.Printf("c\t%T\n", (chan int)(cr))
	//fmt.Printf("c\t%T\n", (chan int)(cs))

}
