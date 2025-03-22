var express = require('express');
var app = express();
//
//
// We will handle requests here
app.listen(3000);
app.get('/', function(req, res){
    res.send('This is the homepage.');
    });
    app.get('/contact', function(req, res){
        res.send('This is the contact page.');
        });
        app.get('/profile/:id', function(req, res){
            res.send('You requested to see profile with the id of ' +
            req.params.id);
            });