package main

import (
	"io"
	"net/http"
)

func root(w http.ResponseWriter, r *http.Request) {
	io.WriteString(w, "Home Page")
}

func d(w http.ResponseWriter, r *http.Request) {
	io.WriteString(w, "Dog Page")
}

func me(w http.ResponseWriter, r *http.Request) {
	io.WriteString(w, "Vaibhav")
}

func main() {
	http.HandleFunc("/", root)
	http.HandleFunc("/dog/", d)
	http.HandleFunc("/me/", me)

	http.ListenAndServe(":8080", nil)
}
