package main

import (
	"fmt"
	"io/ioutil"
	"net/http"
)

//To get data from the internet we do the following:
//Fetch response using http.Get
//Read from response body
//Convert bytes data to string
func main() {
	resp, _ := http.Get("https://www.washingtonpost.com/news-sitemaps/index.xml")
	bytes, _ := ioutil.ReadAll(resp.Body)
	stringBody := string(bytes)
	fmt.Println(stringBody)

	resp.Body.Close() //Free up resources
}
