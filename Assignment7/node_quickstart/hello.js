//Basic server with express.
//Recall from week 5, lab Part 5 (https://medium.com/@onejohi/building-a-simple-rest-api-with-nodejs-and-express-da6273ed7ca9)- simple server code. For this:
//1) npm install express --save
//2) node hello.js (to start the server listening)
//3) go to this page on your browser: http://localhost:3000/url


var express = require("express");
var app = express();
app.get("/url", (req, res, next) => {
 res.json(["Tony","Lisa","Michael","Ginger","Food"]);
});
app.listen(3000, () => {
 console.log("Server running on port 3000");
});
