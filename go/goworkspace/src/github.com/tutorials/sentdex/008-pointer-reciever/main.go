//Notes
//1)Use pointer recievers when you need to modify any values inside struct
//2)A value receiver operates on a copy of the struct so the changes inside the method are not reflected outside
//3)A pointer receiver operates on the struct itself

package main

import "fmt"

const usixteenMax float64 = 65535
const kmhMultiple float64 = 1.60934

type car struct {
	gasPedal      uint16 // 0 - 65535
	brakePedal    uint16
	steeringWheel int16 // -32k - +32k
	topSpeed      float64
}

func (c car) calculateKmh() float64 {
	return float64(c.gasPedal) * (c.topSpeed / usixteenMax)
}

func (c car) calculateMph() float64 {
	return float64(c.gasPedal) * (c.topSpeed / usixteenMax / kmhMultiple)
}

func (c *car) changeTopSpeed(newSpeed float64) {
	c.topSpeed = newSpeed
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
	fmt.Println(aCar.calculateKmh())
	fmt.Println(aCar.calculateMph())

	aCar.changeTopSpeed(131313)
	fmt.Println(aCar.calculateKmh())
	fmt.Println(aCar.calculateMph())

}
