//Basic server with express, connecting to mongoDB. 
//This code comprises: basic routing (hello.js) with mongoDB included (example-query2.js). Here we are finding multiple documents.
//---> (updated from) example idea from: https://www.guru99.com/node-js-mongodb.html#3

//1)If not already done:  npm install express --save
//2) node hello3.js (to start the server listening)
//3) go to this page on your browser: http://localhost:3000/test

//tested using: Node V18.15.0  and MongoDB V6.0.5


var express = require("express");
var app = express();


const { MongoClient } = require("mongodb");
// Use 127.0.0.1 instead of localhost to connect
const url = "mongodb://127.0.0.1:27017";

var str = "";

//begin route - app.get /test
app.get("/test", (req, res) => {

const client = new MongoClient(url);

async function run() {
  try {
    const database = client.db('EmployeeDB');
    const employees = database.collection('Employee');
  
  // Query for an Employee with name 'Martin'
  // const query = { EmployeeName: 'Martin' };
  //OR query for all documents in the collection:
     const query = { };

//The find() method returns a FindCursor that manages the results of your query. You can iterate through the matching documents using one of the following cursor methods:  next()   toArray()   forEach()

 const cursor = employees.find(query);

    // print a message if no documents were found
    if ((await employees.countDocuments(query)) === 0) {
      console.log("No documents found!");
    }

  //  await cursor.forEach(console.dir); //for testing purposes - this prints the result (all documents matching your query) to the console [can be commented out if you wish]


    str = "";
   //sample callback function use 
    await cursor.forEach((el)=>{
       str = str + " Employee ID is: " + el.EmployeeID + "</br>";
});

    res.send(str); //display the contents of 'str' (EmployeeIDs) in the browser

    console.log("Displaying the following in the browser: "+str); //display the contents of 'str' (EmployeeIDs) in the console for testing purposes


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
