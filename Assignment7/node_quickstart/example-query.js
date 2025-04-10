//Part 2 of lab assignment 7, using
//code source: https://www.mongodb.com/docs/drivers/node/upcoming/quick-start/connect-to-mongodb/

//This code assumes database is running, and with connection uri = mongodb://localhost:27017
//This code also assumes that the following database, with the following collection, containing the following document exists:
//database: EmployeeDB
//collection: Employee
//Document: EmployeeID: 1 , EmployeeName: 'Martin' 

//tested using: Node V18.15.0  and MongoDB V6.0.5


const { MongoClient } = require("mongodb");

// Use 127.0.0.1 instead of localhost to connect
const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);
async function run() {
  try {
    const database = client.db('EmployeeDB');
    const employees = database.collection('Employee');
  
  // Query for an Employee with name 'Jack'
    const query = { EmployeeName: 'Jack' };
    const employee = await employees.findOne(query);
    console.log(employee);
 
 } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);


 



