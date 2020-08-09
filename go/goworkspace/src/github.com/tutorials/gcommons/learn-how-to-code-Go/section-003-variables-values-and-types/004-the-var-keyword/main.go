//Best practices
//1) Limit the scope of your variables. Use short declaration as much as possible

package main

import "fmt"

//Short declaration can't be used outside a function body
//x := 41 //Error

//var keyword can be used both outside and inside a function body
var y = 81 //This variable has package level scope

//Declare and set type to int. Assigns the default type value (0 for int)
var z int

func main() {
	//short declaration operator works only inside a function body
	//Declare and assign a value (initialize)
	x := 42

	fmt.Println("x:", x)
	fmt.Println("y:", y)
	fmt.Println("z:", z)

	foo()
}

func foo() {
	fmt.Println("y inside foo:", y)
	fmt.Println("z inside foo:", z)
}
