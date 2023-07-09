const { MongoClient } = require("mongodb");

const addToCart = async (req, res) => {
  const MONGODB_URI =
    "mongodb+srv://vishnu:rrr123@cluster0.fczkwxs.mongodb.net/vinkle?retryWrites=true&w=majority";
  const DATABASE_NAME = "vinkle";
  const COLLECTION_NAME = "Cart";
  const { product, userEmail } = req.body;

  // Connect to the MongoDB database
  const client = new MongoClient(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await client.connect();
    const db = client.db(DATABASE_NAME);
    const collection = db.collection(COLLECTION_NAME);
    // Insert the new product document with userEmail
    await collection.insertOne({ ...product, userEmail, productId: product.productId });
    return res.status(200).json({ message: "Product added to the cart" });   
  } catch (error) {
    console.error("Failed to add product to wishlist:", error);
    return res.status(500).json({ message: "Failed to add product to cart" });
  } finally {
    // Close the MongoDB connection
    await client.close();
  }
};

module.exports = addToCart;