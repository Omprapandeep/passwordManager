const bodyParser = require('body-parser');
const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');
const cors = require("cors");



require("dotenv").config(); // load .env file

const app = express();
 app.use(bodyParser.json());
const port = 3000;
app.use(cors()); // allow all origins
// Database Name
const dbName = 'passop';

// Mongo client
const client = new MongoClient(process.env.MONGO_URI);

let db;

// Connect to MongoDB
async function connectDB() {
  try {
    await client.connect();
    db = client.db(dbName); // use 'passop' database
    console.log(" Connected to MongoDB");
  } catch (err) {
    console.error(" MongoDB connection failed:", err);
  }
}

// Route
app.get('/', async (req, res) => {
  try {
    const collection = db.collection('passwords'); // use passwords collection
    const allPasswords = await collection.find({}).toArray(); // fetch all docs
    res.json(allPasswords);
  } catch (err) {
    console.error("Error fetching data:", err);
    res.status(500).send("Internal Server Error");
  }
});

app.post('/', async (req, res) => {
    const {site,username,password}=req.body;
    const collection = db.collection('passwords'); // use passwords collection
     const result = await collection.insertOne({ site, username, password });
    res.send({  success: true, insertedId: result.insertedId });

});

app.delete('/:id', async (req, res) => {

    const {id}=req.params;

    const collection = db.collection('passwords'); // use passwords collection
    const result = await collection.deleteOne({_id: new ObjectId(id)});
    res.send({success:true});

});



app.put('/:id', async (req, res) => {

    const {id}=req.params;
    const { site, username, password } = req.body;
    const collection = db.collection('passwords'); // use passwords collection
    const result = await collection.updateOne(
            { _id: new ObjectId(id) },
            { $set: { site, username, password } }
        );
    res.send({success:true});

});


// Start server AFTER connecting to DB
connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
});
