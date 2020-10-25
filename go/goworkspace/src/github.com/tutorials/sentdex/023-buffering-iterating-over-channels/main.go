/*
1) For a channel c, the built-in function close(c) records that no more values will be sent on the channel.
2) Sending to or closing a closed channel causes a run-time panic.
3) Closing the nil channel also causes a run-time panic.
4) After calling close, and after any previously sent values have been received, receive operations will return
   the zero value for the channel's type without blocking
*/
package main

import (
	"fmt"
	"sync"
)

var wg sync.WaitGroup

func foo(c chan int, someValue int) {
	defer wg.Done()
	c <- someValue * 5
}

func main() {
	fooVal := make(chan int, 10)
	for i := 0; i < 10; i++ {
		wg.Add(1)
		go foo(fooVal, i)
	}

	wg.Wait() //This line makes sure all goroutines are completed before we close the channel(you cannot send to a closed channel)
	close(fooVal)

	for item := range fooVal {
		fmt.Println(item)
	}
}
