//Notes :
//1) Variables with same type can be defined together (lines 7, 12)
//2) In case returning multiple values we need to specify both in function return type (line 13)
//3) Type conversion (lines 25,26)

package main

import "fmt"

func add(x, y float64) float64 {
	return x + y
}

func multiple(a, b string) (string, string) {
	return a, b
}

func main() {
	num1, num2 := 5.6, 9.5
	fmt.Println(add(num1, num2))

	w1, w2 := "Hey", "There"
	fmt.Println(multiple(w1, w2))

	var a int = 32
	var b = float32(a)

	x := a //x will be type int

	fmt.Println(a, b, x)
}
