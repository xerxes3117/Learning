var express = require('express');
var mongoose = require('mongoose');
var urlencodedParser = express.urlencoded({extended: false}); 

//Connect to the mongoDB Atlas cloud database 'test' (This will create a 'test' database if it doesn't exist already)
mongoose.connect('mongodb+srv://admin:combination@todos.e8xrn.mongodb.net/test?retryWrites=true&w=majority')

//Create schema - A blueprint for our data
var todoSchema = new mongoose.Schema({
    item: String
});

//Creating a model based on schema created above. This will create a collection named 'todos' in the database
var Todo = mongoose.model('Todo', todoSchema);

//Create a document based on Todo model and save it to the 'todos' collection
var itemOne = Todo({item: 'buy flowers'}).save(function(err) {
    if (err) throw err;
    console.log('item saved');
})

var data = [{item: 'get milk'}, {item: 'get food'}, {item: 'get books'},];

module.exports = function(app) {

    app.get('/todo', function(req, res) {
        res.render('todo', {todos: data})
    });

    app.post('/todo', urlencodedParser, function(req, res) {
        data.push(req.body);
        res.json(data);
    });

    app.delete('/todo/:item', function(req, res) {
        data = data.filter(function(todo) {
            return todo.item.replace(/ /g, '-') !== req.params.item;
        })
        res.json(data);
    });
}