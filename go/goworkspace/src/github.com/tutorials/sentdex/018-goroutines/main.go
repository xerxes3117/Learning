/*
1) Concurrency is not parallelism. Know the difference.
2) It takes some fraction of time to initiate a go routine
*/
package main

import (
	"fmt"
	"time"
)

func say(s string) {
	for i := 0; i < 3; i++ {
		fmt.Println(s)
		time.Sleep(time.Millisecond * 100)
	}
}

//Try out all 3 cases and figure out how each works
//Also try removing time.Sleep in "say" function and see how it affects output
func main() {
	//Case 1
	go say("hey")
	say("there")

	//Case 2
	//say("hey")
	//go say("there")

	//Case 3
	//go say("hey")
	//go say("there")

	//Case 4
	//go say("hey")
	//go say("there")
	//time.Sleep(time.Second)
}
