/*
1) goroutines don't block the execution of program so we need something to block the program
   before a particular goroutine is finished (otherwise the program will end before the goroutine is even started)
2) We use WaitGroup for the above functionality
3) Add a waitGroup before each goroutine (using wg.Add(1))
4) Use wg.Wait() in your program at the point where you want to wait for all the added goroutines to finish
5) Don't forget to add wg.Done() to notify each waitGroup when the corresponding goroutine finishes
*/
package main

import (
	"fmt"
	"sync"
	"time"
)

var wg sync.WaitGroup

func say(s string) {
	defer wg.Done() //this will run if the say function finishes or panics out
	for i := 0; i < 3; i++ {
		fmt.Println(s)
		time.Sleep(time.Millisecond * 100) //Try removing this. Why "there" call always runs first now?
	}
}

func main() {
	wg.Add(1)
	go say("hey")
	wg.Add(1)
	go say("there")
	wg.Wait()

	//Notice that the wg.Wait() call above would wait for both "hey" and "there" go routines to finish
	//The "Hi" go routine execution will start only after that
	//This way we can synchronize our goroutines (eg. if you want to start a goroutine only after another goroutine is completed)
	//To run all 3 go routines concurrently, just remove the wg.Wait() above
	wg.Add(1)
	go say("Hi")
	wg.Wait()
}
