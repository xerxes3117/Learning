package main

import "fmt"

func main() {
	switch {
	case true:
		fmt.Println("this should print")
	case false:
		fmt.Println("this should not print")
	}
}
