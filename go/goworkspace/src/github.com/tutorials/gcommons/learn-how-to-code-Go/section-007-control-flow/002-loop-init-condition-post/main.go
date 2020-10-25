package main

import "fmt"

func main() {
	//for init, condition; post {}
	//Scope of counter i is only inside for block
	for i := 0; i <= 100; i++ {
		fmt.Println(i)
	}
	//fmt.Println(i) //Error. Scope on i is only inside for block
}
