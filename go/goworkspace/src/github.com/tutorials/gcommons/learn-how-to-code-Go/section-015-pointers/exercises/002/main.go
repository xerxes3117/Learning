package main

import "fmt"

type person struct {
	name string
}

func changeMe(p *person) {
	//(*p).name = "Sharma" //Also works
	p.name = "Sharma"
}

func main() {
	p1 := person{
		name: "Vaibhav",
	}

	changeMe(&p1)
	fmt.Println(p1.name)
}
