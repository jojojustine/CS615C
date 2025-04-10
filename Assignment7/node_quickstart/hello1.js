//Basic server with express.
//Basic routing. For more on this see: https://expressjs.com/en/starter/basic-routing.html
//As per hello.js (this time with multiple routes)
//1) If not already done:  npm install express --save
//2) node hello1.js (to start the server listening)
//3) go to this page on your browser: http://localhost:3000/url or http://localhost:3000/about or http://localhost:3000/contacts or http://localhost:3000/

//tested using: Node V18.15.0  and MongoDB V6.0.5

var express = require("express");
var app = express();


app.get("/url", (req, res) => {
 res.json(["Tony","Lisa","Michael","Ginger","Food"]);
});

app.get("/about", (req, res) => {
 res.send('This is the about page')
});

app.get("/contacts", (req, res) => {
 res.send('This is the contacts page')
});

app.get("/", (req, res) => {
 res.send('This is the homepage')
});

app.listen(3000, () => {
 console.log("Server running on port 3000");
});
