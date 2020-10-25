package main

import "fmt"

func main() {
	s := "Hello world!"
	//Raw string literal
	t := `Vaibhav Says : 
		   "Hello world"`

	fmt.Println(s)
	fmt.Println(t)

	fmt.Printf("%T\n", s)
	fmt.Printf("%T\n", t)

	//Coversion of string to a slice of bytes
	bs := []byte(s)
	fmt.Println(bs)
	fmt.Printf("%T\n", bs)

	//UTF codepoints for a string
	for i := 0; i < len(s); i++ {
		fmt.Printf("%#U\n", s[i])
	}

	//Hexadecimal values for string characters
	for i, v := range s {
		fmt.Printf("at index position %d we have hex %#x\n", i, v)
	}
}
