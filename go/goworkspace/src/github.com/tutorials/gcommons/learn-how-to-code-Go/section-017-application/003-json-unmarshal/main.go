package main

import (
	"encoding/json"
	"fmt"
)

type person struct {
	First   string `json:"First"`
	Last    string `json:"Las,"`
	Age     int    // `json:"Age"`
	Friends []person
}

func main() {
	s := `[{"First":"James","Age":32},{"First":"Miss","Last":"Moneypenny","Age":27}]`
	bs := []byte(s)
	fmt.Printf("%T\n", s)
	fmt.Printf("%T\n", bs)

	var people []person

	err := json.Unmarshal(bs, &people)
	if err != nil {
		fmt.Println(err)
	}

	fmt.Println("\nall of the data", people)

	for i, v := range people {
		fmt.Println("\nPERSON NUMBER", i)
		fmt.Println("First: ", v.First, " Las: ", v.Last, "Age: ", v.Age)

	}

}
