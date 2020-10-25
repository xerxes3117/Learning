package main

import "fmt"

type person struct {
	first string
	last  string
	fav   []string
}

func main() {
	p1 := person{
		first: "rahul",
		last:  "verma",
		fav: []string{
			"Chaocolate",
			"Vanila",
		},
	}

	p2 := person{
		first: "dev",
		last:  "dhillon",
		fav: []string{
			"Chocolate",
			"Vanilla",
		},
	}

	for i, v := range p1.fav {
		fmt.Println(i, v)
	}

	for i, v := range p2.fav {
		fmt.Println(i, v)
	}
}
