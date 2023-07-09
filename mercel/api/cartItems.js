const { MongoClient } = require("mongodb");

const viewCart = async (req, res) => {
  const MONGODB_URI =
    "mongodb+srv://vishnu:rrr123@cluster0.fczkwxs.mongodb.net/vinkle?retryWrites=true&w=majority";
  const DATABASE_NAME = "vinkle";
  const COLLECTION_NAME = "Cart";

  const { userEmail } = req.query; 

  // Connect to the MongoDB database
  const client = new MongoClient(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await client.connect();
    const db = client.db(DATABASE_NAME);
    const collection = db.collection(COLLECTION_NAME);

    // Find all products in the Cart for the given userEmail
    console.log(userEmail);
    const CartItems = await collection.find({ userEmail }).toArray();
    res.setHeader('Cache-Control', 'no-store');
    return res.status(200).json(CartItems);
  } catch (error) {
    console.error("Failed to fetch Cart items:", error);
    return res.status(500).json({ message: "Failed to fetch Cart items" });
  } finally {
    // Close the MongoDB connection
    await client.close();
  }
};

module.exports = viewCart;