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

	m := map[string]person{
		p1.last: p1,
		p2.last: p2,
	}

	for _, v := range m {
		fmt.Println(v.first)
		fmt.Println(v.last)
		for i, val := range v.fav {
			fmt.Println(i, val)
		}
		fmt.Println("-------")
	}
}
