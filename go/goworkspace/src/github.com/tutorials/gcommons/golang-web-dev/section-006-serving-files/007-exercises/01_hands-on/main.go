package main

import (
	"html/template"
	"io"
	"net/http"
)

var tpl *template.Template

func main() {
	http.HandleFunc("/", foo)
	http.HandleFunc("/dog/", dog)
	http.HandleFunc("/dog.jpg", chien)
	http.ListenAndServe(":8080", nil)
}

func foo(w http.ResponseWriter, req *http.Request) {
	io.WriteString(w, "foo ran")
}

func dog(w http.ResponseWriter, req *http.Request) {
	tpl = template.Must(template.ParseFiles("dog.gohtml"))

	tpl.ExecuteTemplate(w, "dog.gohtml", nil)
}

func chien(w http.ResponseWriter, req *http.Request) {
	http.ServeFile(w, req, "dog.jpg")
}
