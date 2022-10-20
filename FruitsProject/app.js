const MongoClient = require("mongodb").MongoClient;
// Replace the uri string with your connection string.

const url = "mongodb://localhost:27017";
const dbName = "fruitsDB";

const client = new MongoClient(url, { useNewUrlParser: true });

async function run() {
  try {
    const database = client.db("sample_mflix");
    const movies = database.collection("movies");
    // Query for a movie that has the title 'Back to the Future'
    const query = { title: "Back to the Future" };
    const movie = await movies.findOne(query);
    console.log(movie);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
