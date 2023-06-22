// api/searchProducts.js

import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  const { query } = req.query;
  const MONGODB_URI =
    "mongodb+srv://vishnu:rrr123@cluster0.fczkwxs.mongodb.net/vinkle?retryWrites=true&w=majority";
  const DATABASE_NAME = "vinkle";
  const COLLECTION_NAME = "Products";
  try {
    // Connect to the MongoDB database
    const client = await MongoClient.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    
    // Access the desired database and collection
    const db = client.db(DATABASE_NAME);
    const collection = db.collection(COLLECTION_NAME);

    // Perform the search query on the collection
    const searchResults = await collection.find({
      $text: { $search: query },
    }).toArray();

    // Close the MongoDB connection
    client.close();

    // Return the search results as the response
    res.status(200).json(searchResults);
  } catch (error) {
    console.error("Failed to search products:", error);
    res.status(500).json({ error: "Failed to search products" });
  }
}
