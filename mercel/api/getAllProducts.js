const { MongoClient } = require("mongodb");

const getAllProducts = async (req, res) => {
  const MONGODB_URI =
    "mongodb+srv://vishnu:rrr123@cluster0.fczkwxs.mongodb.net/vinkle?retryWrites=true&w=majority";
  const DATABASE_NAME = "vinkle";
  const COLLECTION_NAME = "Products";

  // Connect to the MongoDB database
  const client = new MongoClient(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await client.connect();
    const db = client.db(DATABASE_NAME);
    const collection = db.collection(COLLECTION_NAME);

    // Fetch all products
    const products = await collection.find().toArray();

    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.setHeader("Access-Control-Allow-Methods", "GET");
    return res.status(200).json({ products });
  } catch (error) {
    console.error("Failed to fetch products:", error);
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.setHeader("Access-Control-Allow-Methods", "GET");
    return res.status(500).json({ message: "Failed to fetch products" });
  } finally {
    // Close the MongoDB connection
    await client.close();
  }
};

module.exports = getAllProducts;