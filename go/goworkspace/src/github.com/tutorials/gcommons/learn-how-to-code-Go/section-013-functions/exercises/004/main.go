package main

import (
	"fmt"
)

type person struct {
	first string
	last  string
	age   int
}

func (p person) speak() {
	fmt.Println("My name is:", p.first, p.last)
}

func main() {
	p1 := person{
		first: "Vaibhav",
		last:  "Sharma",
		age:   26,
	}

	p1.speak()
}
