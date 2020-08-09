package main

import (
	"fmt"
)

func main() {
	//Use semicolon to run 2 statements on one line (2 if conditions below)
	//The scope of x is only inside the if blow
	if x := 42; x == 42 {
		fmt.Println("001")
	}
	//fmt.Println(x) //error
	// fmt.Println(x); fmt.Printf("%T", x)
}
