//Notes
//1)Any type that has a method named String() implements the "Stringer" interface
//2)While printing, fmt (and other packages) figures out how to print that value based on this method
//3)Location type implements Stringer interface because it has String() method
//4)Try changing the fmt.Sprintf(l.Loc) inside the String method to see different results in fmt.Println(s.Locations)

package main

import (
	"encoding/xml"
	"fmt"
	"io/ioutil"
	"net/http"
)

//SiteMapIndex struct for sitemap list inside the xml
type SiteMapIndex struct {
	Locations []Location `xml:"sitemap"`
}

//Location struct for loc (url) inside sitemap list
type Location struct {
	Loc string `xml:"loc"`
}

func (l Location) String() string {
	return fmt.Sprintf(l.Loc)
}

func main() {
	resp, _ := http.Get("https://www.washingtonpost.com/news-sitemaps/index.xml")
	bytes, _ := ioutil.ReadAll(resp.Body)
	resp.Body.Close() 

	var s SiteMapIndex
	xml.Unmarshal(bytes, &s)

	fmt.Println(s.Locations)
}
