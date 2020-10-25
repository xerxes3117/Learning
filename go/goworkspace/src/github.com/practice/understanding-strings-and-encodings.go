/**
 * ? How UTF-8 is optimizing space
 * ? Read golang blog on string, runes etc. - https://blog.golang.org/strings
 * ? Read JSOM links from evernote
 * ? Read Marshal documentation - https://golang.org/pkg/encoding/json/#Marshal
 */

package main

import (
	"encoding/json"
	"fmt"
)

// Person struct
type Person struct {
	F string
	L string
}

func main() {
	//1.String is internally stored as a byte slice

	//Byte slices are a list of bytes that represent UTF-8 encodings of Unicode code points of each character in the string
	str := "Hello 世界 there"
	bs := []byte(str)

	fmt.Println(bs)  // [72 101 108 108 111 32 228 184 150 231 149 140 32 116 104 101 114 101]
	fmt.Println(str) // Hello 世界 there

	//2. Showing string representation of byte slice

	fmt.Printf("%s\n", bs)
	fmt.Println(string(bs))

	//3.Runes vs bytes

	//Rune corresposnds to a character's Unicode code point
	//A character's Unicode code point can be represented by 1 to 4 bytes (depending on the character)
	rs := []rune(str)

	fmt.Println(rs) // [72 101 108 108 111 32 19990 30028 32 116 104 101 114 101]

	//4.Binary representation of strings

	//Note that 世 & 界 are stored in 3 bytes each which confirms strings in golang are UTF-8 encoded slice of bytes (rather than direct binary representation of 19990 & 30028 as in runes)
	st := fmt.Sprintf("%08b", []byte(str))
	fmt.Println(st) // [01001000 01100101 01101100 01101100 01101111 00100000 11100100 10111000 10010110 11100111 10010101 10001100 00100000 01110100 01101000 01100101 01110010 01100101]

	//This is how strings would be stored if they were rune slices
	st1 := fmt.Sprintf("%08b", []rune(str))
	fmt.Println(st1) // [01001000 01100101 01101100 01101100 01101111 00100000 100111000010110 111010101001100 00100000 01110100 01101000 01100101 01110010 01100101]

	//5. Range loops over elements in runes and not bytes

	// however counter i is incremented by number of bytes travsersed rather than runes
	for i, b := range str {
		fmt.Printf("i: %d. b: %q\n", i, b)
	}

	//6. Marshalling and unmarshalling to/from JSON in golang
	p1 := Person{"a", "b"}
	bs1, _ := json.Marshal(p1)
	fmt.Println(bs1)
	fmt.Println(string(bs1))

	var p2 Person
	bs1 = []byte(`{"First":"alice","Last":"bob"}`)
	json.Unmarshal(bs1, &p2)
	fmt.Println(p2)

}
