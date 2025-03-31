const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  const dbo = db.db("mydb");
  dbo.collection("orders").insertOne({
    _id: 1,
    product_id: 154,
    status: 1
  }, function(err, res) {
    if (err) throw err;
    console.log("✅ 1 order inserted");
    db.close();
  });
});