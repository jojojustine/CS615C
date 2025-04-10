//Part 2 of lab assignment 7, using
//code source: https://www.mongodb.com/docs/drivers/node/upcoming/quick-start/connect-to-mongodb/
//here we are finding multiple documents. Adapted from source: https://www.mongodb.com/docs/drivers/node/upcoming/usage-examples/find/

//This code assumes database is running, and with connection uri = mongodb://localhost:27017
//This code also assumes that the following database, with the following collection, containing the following documents exists:
//database: EmployeeDB
//collection: Employee
//Document: EmployeeID: 1 , EmployeeName: 'Martin' 
//Document: EmployeeID: 2 , EmployeeName: 'Jack' 

//tested using: Node V18.15.0  and MongoDB V6.0.5


const { MongoClient } = require("mongodb");

// Use 127.0.0.1 instead of localhost to connect
const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

async function run() {
  try {
    const database = client.db('EmployeeDB');
    const employees = database.collection('Employee');
  

  //Query for an Employee with name 'Martin'
  //const query = { EmployeeName: 'Martin' };
  //OR query for all documents in the collection:
    const query = { };

//The find() method returns a FindCursor that manages the results of your query. You can iterate through the matching documents using one of the following cursor methods:  next()   toArray()   forEach()

 const cursor = employees.find(query);

    // print a message if no documents were found
    if ((await employees.countDocuments(query)) === 0) {
      console.log("No documents found!");
    }
    // replace console.dir with your callback to access individual elements
    // await cursor.forEach(console.dir); //for testing purposes - this prints the result (all documents matching your query) to the console
  
    //sample callback function use (comment this out if you wish to use the above 'for testing purposes' print to console)
    await cursor.forEach((el)=>{
       console.log(" Employee ID is: " + el.EmployeeID + " Employee Name is: " + el.EmployeeName);
});
 


 } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);


 



