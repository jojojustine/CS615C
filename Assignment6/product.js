const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  const dbo = db.db("mydb");

  // Drop the collection if it exists
  dbo.collection("products").drop(function(err, delOK) {
    if (err && err.codeName !== 'NamespaceNotFound') throw err;
    if (delOK) console.log("🗑️ Existing 'products' collection dropped.");

    // Insert fresh data
    dbo.collection("products").insertMany([
      { _id: 154, name: "Chocolate Heaven" },
      { _id: 155, name: "Tasty Lemons" },
      { _id: 156, name: "Vanilla Dreams" }
    ], function(err, res) {
      if (err) throw err;
      console.log("✅ Products inserted");
      db.close();
    });
  });
});