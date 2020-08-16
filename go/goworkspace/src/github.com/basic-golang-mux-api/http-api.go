package main

import (
	"encoding/json"
	"net/http"

	"github.com/gorilla/mux"
)

var data []string = []string{}

func main() {
	router := mux.NewRouter()

	router.HandleFunc("/test", test)

	//{item} is a dynamic variable in url that can be accessed by router function
	router.HandleFunc("/add/{item}", addItem)

	http.ListenAndServe(":5000", router)
}

/**
 * @todo what does json.NewEncoder do?
 */
func test(w http.ResponseWriter, r *http.Request) {
	//Set the content-type to for response
	w.Header().Set("Content-Type", "application/json")

	// Create a json encoding from anonymous Struct provided
	json.NewEncoder(w).Encode(struct {
		ID string
	}{"555"})
}

func addItem(w http.ResponseWriter, req *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	routeVar := mux.Vars(req)["item"]
	data = append(data, routeVar)
	json.NewEncoder(w).Encode(data)
}
