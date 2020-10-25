/*
1) Defer statements runs when the surrounding function finishes or panics/errors out
2) Defer statements work in first in last out order
*/
package main

import "fmt"

func foo() {
	defer fmt.Println("Done!")
	defer fmt.Println("Are we done?")
	fmt.Println("Doing some stuff, who knows what?")
}

func bar() {
	for i := 0; i < 5; i++ {
		defer fmt.Println(i) //See output. "First in Last out" in defer statements
	}
}

func main() {
	foo()
	bar()
}
