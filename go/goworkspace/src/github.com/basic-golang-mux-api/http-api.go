package main

import (
	"encoding/json"
	"net/http"

	"github.com/gorilla/mux"
)

//Item is a struct that groups all necessary fields into a sin unit
type Item struct {
	Data      string `json:"data"`
	OtherData int    `json:"otherData"`
}

var data []Item = []Item{}

func main() {
	router := mux.NewRouter()

	//{item} is a dynamic variable in url that can be accessed by router function
	router.HandleFunc("/add", addItem).Methods("POST")

	http.ListenAndServe(":5000", router)
}

/**
 * What does json.NewEncoder and Decoder do?
	- json.NewEncoder.Encode : golang data structure -> json format
	- json.NewDecoder.Decode : json format -> golang data structure
 * @todo Is converting json <-> utf-8 also part of json.NewEncoder and json.NewDecoder?
 * @todo marshal/unmarshal vs encode/decode
*/
func addItem(w http.ResponseWriter, req *http.Request) {
	//Get Item value from request body
	var newItem Item
	json.NewDecoder(req.Body).Decode(&newItem)

	data = append(data, newItem)

	//Set the content-type to for response
	w.Header().Set("Content-Type", "application/json")

	json.NewEncoder(w).Encode(data)
}
