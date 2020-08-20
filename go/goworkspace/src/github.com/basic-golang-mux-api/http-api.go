/**
 * ? 1. What does json.NewEncoder and Decoder do?
 * *  - json.NewEncoder.Encode : golang data structure -> json format -> write to http stream
 * *  - json.NewDecoder.Decode : read from http stream -> json format -> golang data structure

 * ? 2. Is converting json <-> utf-8 also part of json.NewEncoder and json.NewDecoder?
 * *  - Yes, strings in golang are already UTF-8 encoded

 * ? 3. marshal/unmarshal vs encode/decode
 * *  - Marshal and Unmarshal mean that we want to get the JSON representation of any type and vice-versa.
 * *    While Encode means that we want to do the Marshaling process and then write(encode) the result to any stream object.
 * *	And Decode means that we want to get(decode) a json object from any stream and then do the Unmarshaling process.

 * ? How do we check for invalid format data coming in body (eg. incoming array of posts rather than single post in PUT request)
 * ? how are data structures stored in memory
 * ? how a program is executed
 * ? what exactly is happening in terms of binary values when we serialize/deserialize data to json
 * ? same as above for when we encode utf-8 data to other formats
 * ? is binary representation of data changing during encoding?
 * ? What is meant by json format. What is json format of various data structures
 * ? how is append working?
 * ? what are http.ResponseWriter and *http.Request in route handler functions?
 * ? what is w.Write and w.WriteHeader doing?
 * ? What is slice of bytes?
 * ? JSON vs string vs byte slice in golang
 * ? Why Golang has json in slice of bytes format
 * ? How is this working: append(posts[:id], posts[id+1:]...)
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

	//.Methods is the list of allowed methods on that route. It accepts a variadic parameter
	router.HandleFunc("/posts", addPost).Methods("POST")

	router.HandleFunc("/posts", getAllPosts).Methods("GET")

	router.HandleFunc("/posts/{id}", getPost).Methods("GET")

	router.HandleFunc("/posts/{id}", updatePost).Methods("PUT")

	router.HandleFunc("/posts/{id}", patchPost).Methods("PATCH")

	router.HandleFunc("/posts/{id}", deletePost).Methods("DELETE")

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
		return
	}

	post := posts[id]

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(post)
}

func getAllPosts(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	json.NewEncoder(w).Encode(posts)
}

func addPost(w http.ResponseWriter, req *http.Request) {
	//Get Item value from request body
	var newPost Post
	json.NewDecoder(req.Body).Decode(&newPost)

	posts = append(posts, newPost)

	//Set the content-type to for response
	w.Header().Set("Content-Type", "application/json")

	json.NewEncoder(w).Encode(posts)
}

func updatePost(w http.ResponseWriter, r *http.Request) {
	// get the post ID from the route params
	var idParam string = mux.Vars(r)["id"]
	id, err := strconv.Atoi(idParam)
	if err != nil {
		w.WriteHeader(400)
		w.Write([]byte("ID cannot be converted to an integer"))
	}

	// error checking
	if id >= len(posts) {
		w.WriteHeader(404)
		w.Write([]byte("No post found with id"))
		return
	}

	// get the value from the JSON body
	var updatedPost Post
	json.NewDecoder(r.Body).Decode(&updatedPost)

	posts[id] = updatedPost

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(updatedPost)
}

func patchPost(w http.ResponseWriter, r *http.Request) {
	// get the post ID from the route params
	var idParam string = mux.Vars(r)["id"]
	id, err := strconv.Atoi(idParam)
	if err != nil {
		w.WriteHeader(400)
		w.Write([]byte("ID cannot be converted to an integer"))
	}

	// error checking
	if id >= len(posts) {
		w.WriteHeader(404)
		w.Write([]byte("No post found with id"))
		return
	}

	//get the current value
	post := &posts[id]
	json.NewDecoder(r.Body).Decode(post)

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(post)
}

func deletePost(w http.ResponseWriter, r *http.Request) {
	// get the post ID from the route params
	var idParam string = mux.Vars(r)["id"]
	id, err := strconv.Atoi(idParam)
	if err != nil {
		w.WriteHeader(400)
		w.Write([]byte("ID cannot be converted to an integer"))
	}

	// error checking
	if id >= len(posts) {
		w.WriteHeader(404)
		w.Write([]byte("No post found with id"))
		return
	}

	posts = append(posts[:id], posts[id+1:]...)

	w.WriteHeader(http.StatusOK) // 200
}
