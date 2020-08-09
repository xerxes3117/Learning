package main

import (
	"fmt"
)

func main() {
	c := make(chan int, 2) //Non-Buffered channel (require go-routine)
	d := make(chan int)    //Buffered channel

	go func() {
		d <- 41
	}()
	fmt.Println(<-d)

	c <- 42
	fmt.Println(<-c)

	c <- 43
	c <- 44
	fmt.Println(<-c)
	fmt.Println(<-c)
}
