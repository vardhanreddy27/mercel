const { MongoClient } = require("mongodb");

const removeFromCart = async (req, res) => {
  const MONGODB_URI =
    "mongodb+srv://vishnu:rrr123@cluster0.fczkwxs.mongodb.net/vinkle?retryWrites=true&w=majority";
  const DATABASE_NAME = "vinkle";
  const COLLECTION_NAME = "Cart";

  const { productId, userEmail } = req.body;

  // Connect to the MongoDB database
  const client = new MongoClient(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await client.connect();
    const db = client.db(DATABASE_NAME);
    const collection = db.collection(COLLECTION_NAME);

    // Find and remove the product from the cart
    await collection.deleteOne({ _id: productId, userEmail });

    return res.status(200).json({ message: "Product removed from the cart" });
  } catch (error) {
    console.error("Failed to remove product from cart:", error);
    return res.status(500).json({ message: "Failed to remove product from cart" });
  } finally {
    // Close the MongoDB connection
    await client.close();
  }
};

module.exports = removeFromCart;