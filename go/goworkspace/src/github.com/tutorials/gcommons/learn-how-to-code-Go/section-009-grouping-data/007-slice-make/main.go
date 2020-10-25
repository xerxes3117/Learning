//Notes :
//1)Slice created through composite literal []int{} has dynamic size and can be expanded infinitely.
//  Everytime a new element is added to such slice,a new underlying array is allocated.
//2)To allocate the size efficietly, we can specify the capacity in make() function which allocates
//  that particular space to underlying array
//3)Capacity is not strict so you can still append more elements than specified capacity to the slice.
//  Once the specified capacity exceeds the limit, a new underlying array is allocated and older one is
//  deleted. The new array has twice the original specified capacity.

package main

import (
	"fmt"
)

func main() {
	x := make([]int, 10, 12)
	fmt.Println(x)
	fmt.Println(len(x))
	fmt.Println(cap(x))
	x[0] = 42
	x[9] = 999

	fmt.Println(x)
	fmt.Println(len(x))
	fmt.Println(cap(x))

	//x[10] = 3423 //This doesn't work
	x = append(x, 3423) //This works

	fmt.Println(x)
	fmt.Println(len(x))
	fmt.Println(cap(x))

	x = append(x, 3424)

	fmt.Println(x)
	fmt.Println(len(x))
	fmt.Println(cap(x))

	x = append(x, 3425) //Capacity limit exceeded. Generate a new underlying array with twice capacity (24)

	fmt.Println(x)
	fmt.Println(len(x))
	fmt.Println(cap(x))
}
