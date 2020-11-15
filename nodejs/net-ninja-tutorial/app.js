var express = require('express');

var app = express();
app.set('view engine', 'ejs');

//This middleware would be FIRED/TRIGGERED everytime /assets appears in url or in a file (like accessing css files)
//Note that the name of Trigger path and folder to be served can be different 
app.use('/assets', express.static('./assets'));

app.get('/', function(req, res) {
    res.render('index');
})

app.get('/contact', function(req,res) {
    res.send('');
})

app.get('/profile/:id', function(req,res) {
    var data = {
        age: 29, 
        job: 'ninja',
        hobbies: ['eating', 'fightinh', 'fishing']
    }
    res.render('profile', {
        id: req.params.id,
        data: data
    });
})

app.listen(3000); 