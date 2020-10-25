package main

import "fmt"

type car struct {
	gasPedal      uint16 // 0 - 65535
	brakePedal    uint16
	steeringWheel int16 // -32k - +32k
	topSpeed      float64
}

func main() {
	aCar := car{
		gasPedal:      222,
		brakePedal:    111,
		steeringWheel: 333,
		topSpeed:      121212,
	}
	bCar := car{222, 111, 333, 121212}

	fmt.Println(aCar.gasPedal, bCar.gasPedal)
}
