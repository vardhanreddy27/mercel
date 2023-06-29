const { MongoClient } = require("mongodb");

const removeFromWishlist = async (req, res) => {
  const MONGODB_URI =
    "mongodb+srv://vishnu:rrr123@cluster0.fczkwxs.mongodb.net/vinkle?retryWrites=true&w=majority";
  const DATABASE_NAME = "vinkle";
  const COLLECTION_NAME = "Wishlist";

  const { productId } = req.params;

  // Connect to the MongoDB database
  const client = new MongoClient(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await client.connect();
    const db = client.db(DATABASE_NAME);
    const collection = db.collection(COLLECTION_NAME);

    // Delete the product from the wishlist
    const result = await collection.deleteOne({ _id: productId });

    if (result.deletedCount > 0) {
      res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
      res.setHeader("Access-Control-Allow-Methods", "OPTIONS, DELETE");
      res.setHeader("Access-Control-Allow-Headers", "Content-Type");
      return res.status(200).json({ message: "Product removed from the wishlist" });
    } else {
      res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
      res.setHeader("Access-Control-Allow-Methods", "OPTIONS, DELETE");
      res.setHeader("Access-Control-Allow-Headers", "Content-Type");
      return res.status(404).json({ message: "Product not found in the wishlist" });
    }
  } catch (error) {
    console.error("Failed to remove product from wishlist:", error);
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.setHeader("Access-Control-Allow-Methods", "OPTIONS, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    return res.status(500).json({ message: "Failed to remove product from wishlist" });
  } finally {
    // Close the MongoDB connection
    await client.close();
  }
};

module.exports = removeFromWishlist;