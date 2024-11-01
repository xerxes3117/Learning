package main

import (
	"io"
	"log"
	"net/http"
	"text/template"
)

var tpl *template.Template

func root(w http.ResponseWriter, r *http.Request) {
	io.WriteString(w, "Home Page")
}

func d(w http.ResponseWriter, r *http.Request) {
	io.WriteString(w, "Dog Page")
}

func me(w http.ResponseWriter, r *http.Request) {
	p1 := "Vaibhav"

	err := tpl.Execute(w, p1)
	if err != nil {
		log.Fatalln(err)
	}
}

func init() {
	tpl = template.Must(template.ParseFiles("tpl.gohtml"))
}

func main() {
	http.HandleFunc("/", root)
	http.HandleFunc("/dog/", d)
	http.HandleFunc("/me/", me)

	http.ListenAndServe(":8080", nil)
}
