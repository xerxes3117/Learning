/*
1) Channels are usually used with goroutines to pass value across them
2) Sending or recieving to a channel blocks by default until both sender and reciever are ready
3) Notice that we didn't add any wait group for the goroutines because channels block by default
*/
package main

import "fmt"

func foo(c chan int, someValue int) {
	fmt.Println("adding:", someValue)
	c <- someValue * 5
}

func main() {
	fooVal := make(chan int)
	go foo(fooVal, 5)
	go foo(fooVal, 3)
	//go foo(fooVal, 1) //Explain the output when we add this line too ?

	fmt.Println("reached after the go routines..") //Explain why this prints randomly before or after go routines start

	v1 := <-fooVal //Both these statements block until goroutines
	v2 := <-fooVal //are done adding to the fooVal channel

	//v1, v2 := <-fooVal, <-fooVal //This does the same thing as above 2 statements

	fmt.Println(v1, v2)
}
