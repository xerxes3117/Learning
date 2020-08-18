/**
 * * What does json.NewEncoder and Decoder do?
 * * - json.NewEncoder.Encode : golang data structure -> json format
 * * - json.NewDecoder.Decode : json format -> golang data structure
 * ? Is converting json <-> utf-8 also part of json.NewEncoder and json.NewDecoder?
 * ? marshal/unmarshal vs encode/decode
 * ? how is append working?
 * ? what are http.ResponseWriter and *http.Request in route handler functions?
 * ? what is w.Write and w.WriteHeader doing?
 */

package main

import (
	"encoding/json"
	"net/http"
	"strconv"

	"github.com/gorilla/mux"
)

// Post represents single post by user
type Post struct {
	Title  string `json:"title"`
	Body   string `json:"body"`
	Author User   `json:"author"`
}

// User is struct that represnets a user
type User struct {
	FullName string `json:"fullName"`
	Username string `json:"username"`
	Email    string `json:"email"`
}

var posts []Post = []Post{}

func main() {
	router := mux.NewRouter()

	router.HandleFunc("/posts", addItem).Methods("POST")

	router.HandleFunc("/posts", getAllPosts).Methods("GET")

	//{id} is a route variable in url that can be accessed by router function
	router.HandleFunc("/posts/{id}", getPost).Methods("GET")

	http.ListenAndServe(":5000", router)
}

func getPost(w http.ResponseWriter, r *http.Request) {
	//Accessing the route variable passed in url
	var idParam string = mux.Vars(r)["id"]

	id, err := strconv.Atoi(idParam)
	if err != nil {
		w.WriteHeader(400)
		w.Write([]byte("ID counld not be converted to integer"))
		return
	}

	if id >= len(posts) {
		w.WriteHeader(404)
		w.Write([]byte("No post found with id"))
	}

	post := posts[id]

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(post)
}

func getAllPosts(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	json.NewEncoder(w).Encode(posts)
}

func addItem(w http.ResponseWriter, req *http.Request) {
	//Get Item value from request body
	var newPost Post
	json.NewDecoder(req.Body).Decode(&newPost)

	posts = append(posts, newPost)

	//Set the content-type to for response
	w.Header().Set("Content-Type", "application/json")

	json.NewEncoder(w).Encode(posts)
}
