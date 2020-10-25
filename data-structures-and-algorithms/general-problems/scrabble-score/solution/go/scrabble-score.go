package scrabble

import "strings"

//Score calculates the scrabble score for a given word
func Score(str string) int {

	scores := []int{1, 3, 3, 2, 1, 4, 2, 4, 1, 8, 5, 1, 3, 1, 1, 3, 10, 1, 1, 1, 1, 4, 4, 8, 4, 10}
	strLower := strings.ToLower(str)
	scr := 0

	for _, v := range strLower {
		scr += scores[v-'a']
	}
	return scr
}
