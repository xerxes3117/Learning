package main

import (
	"fmt"
)

func main() {
	favSport := "surfing"
	switch favSport {
	case "skiing":
		fmt.Println("fav sport is skiing")
	case "surfing":
		fmt.Println("fav sport is surfing")
		fallthrough
	case "sailing":
		fmt.Println("fav sport is sailing")
	default:
		fmt.Println("default case")
	}
}
