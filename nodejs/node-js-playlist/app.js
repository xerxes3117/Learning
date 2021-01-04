var express = require('express');
var todoController = require('./controllers/todoController');

var app = express();

//Setup template engine
app.set('view engine', 'ejs');

//serve static files (will be served on any request that requires the resource)
app.use(express.static('./public'));

//fire controllers
todoController(app);

//listen on port
app.listen(3000);
console.log('Listening on port 3000...');