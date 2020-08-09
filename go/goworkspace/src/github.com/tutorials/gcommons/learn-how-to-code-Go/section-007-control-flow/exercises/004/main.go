package main

import "fmt"

func main() {
	i := 1
	for {
		if i > 26 {
			break
		}
		fmt.Println(i)
		i++
	}
}
