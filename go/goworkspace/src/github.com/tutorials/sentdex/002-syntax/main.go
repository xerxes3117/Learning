package main

import (
	"fmt"
	"math/rand"
)

//main function is called by default eveytime the program runs
func main() {
	fmt.Println("A number from 1-100", rand.Intn(100))
}
