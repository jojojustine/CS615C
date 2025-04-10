//Part 2 of lab assignment 7, using
//code source: https://www.mongodb.com/docs/drivers/node/upcoming/quick-start/connect-to-mongodb/
//code source block for insert: https://www.mongodb.com/docs/drivers/node/upcoming/fundamentals/crud/write-operations/insert/

//for CRUD operations see: https://www.mongodb.com/docs/drivers/node/upcoming/fundamentals/crud/#std-label-node-crud-landing

//tested using: Node V18.15.0  and MongoDB V6.0.5


const { MongoClient } = require("mongodb");

// Use 127.0.0.1 instead of localhost to connect with Node V18.15.0
const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);
async function run() {
  try {
//////begin insert block of code//////
      const myDB = client.db("EmployeeDB");
      const myColl = myDB.collection("Employee");
      const doc = { EmployeeID: 2, EmployeeName: "Jack" };
      const result = await myColl.insertOne(doc);
      console.log(
   `A document was inserted with the _id: ${result.insertedId}`,
);
//////end insert block of code//////
 
 } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);





