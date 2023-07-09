const { MongoClient } = require("mongodb");

const viewWishlist = async (req, res) => {
  const MONGODB_URI =
    "mongodb+srv://vishnu:rrr123@cluster0.fczkwxs.mongodb.net/vinkle?retryWrites=true&w=majority";
  const DATABASE_NAME = "vinkle";
  const COLLECTION_NAME = "Cart";

  const { userEmail } = req.body;

  // Connect to the MongoDB database
  const client = new MongoClient(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await client.connect();
    const db = client.db(DATABASE_NAME);
    const collection = db.collection(COLLECTION_NAME);

    // Find all products in the wishlist for the given userEmail
    const wishlistItems = await collection.find({ userEmail }).toArray();

    return res.status(200).json(wishlistItems);
  } catch (error) {
    console.error("Failed to fetch wishlist items:", error);
    return res.status(500).json({ message: "Failed to fetch wishlist items" });
  } finally {
    // Close the MongoDB connection
    await client.close();
  }
};

module.exports = viewWishlist;