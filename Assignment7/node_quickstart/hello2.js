//Basic server with express, connecting to mongoDB. 
//This code comprises: basic routing (hello.js) with mongoDB included (example-query.js). 
//---> (updated and simplified from) example idea from: https://www.guru99.com/node-js-mongodb.html#3

//1)If not already done:  npm install express --save
//2) node hello2.js (to start the server listening)
//3) go to this page on your browser: http://localhost:3000/test

//tested using: Node V18.15.0  and MongoDB V6.0.5

var express = require("express");
var app = express();


const { MongoClient } = require("mongodb");
// Use 127.0.0.1 instead of localhost to connect
const url = "mongodb://127.0.0.1:27017";


//begin route - app.get /test
app.get("/test", (req, res) => {

const client = new MongoClient(url);

async function run() {
  try {
    const database = client.db('EmployeeDB');
    const employees = database.collection('Employee');
  
  // Query for an Employee with name 'Jack'
    const query = { EmployeeName: 'Jack' };
    const employee = await employees.findOne(query);
    console.log(employee); //return the document to the console for testing/verification purposes only [can be commented out if you wish]


//res.send(employee); //display the full document on the browser [uncomment (and comment the next res.send) if you want to try this]
res.send("Employee ID is: " + employee.EmployeeID); //display the EmployeeID of this document to the browser

 } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

//

});
//end route - app.get /test



app.listen(3000, () => {
 console.log("Server running on port 3000");
});
