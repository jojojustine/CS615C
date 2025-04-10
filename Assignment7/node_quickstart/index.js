const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string.
const uri = "mongodb+srv://Jojojustine:Jojo1234@cluster0.ybwnxto.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db('sample_mflix');
    const movies = database.collection('movies');
    const newMovie = {
        title: 'Jojo Justine', year: 2025,
        director: 'ID - 24250470', genres: ['Tech', 'Sci-Fi', 'Adventure'], rating: 8.5};

    // Task 1. Insertion (Avoid duplicate insertions)
    const existing = await movies.findOne({ title: 'Jojo Justine' });
    if (existing) {
        console.log('Document already exists:', existing._id);
    } else {
        const insertResult = await movies.insertOne(newMovie);
        console.log('Inserted document ID: ', insertResult.insertedId);
    }

    // Query for a movie that has the title 'Back to the Future'
    const query = { title: 'Back to the Future' };
    const movie = await movies.findOne(query);

    console.log(movie);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
