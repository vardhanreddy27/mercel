const { MongoClient } = require("mongodb");

const saveUser = async (req, res) => {
  const MONGODB_URI =
    "mongodb+srv://vishnu:Vardhan@27@cluster0.fczkwxs.mongodb.net/vinkle";
  const DATABASE_NAME = "vinkle";
  const COLLECTION_NAME = "Users";

  const { given_name, email, picture } = req.body;

  // Connect to the MongoDB database
  const client = new MongoClient(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await client.connect();
    const db = client.db(DATABASE_NAME);
    const collection = db.collection(COLLECTION_NAME);

    // Check if the user already exists
    const existingUser = await collection.findOne({ email });
    if (existingUser) {
      // User already exists, return without any error message
      res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
      res.setHeader("Access-Control-Allow-Methods", "OPTIONS, POST");
      res.setHeader("Access-Control-Allow-Headers", "Content-Type");
      return res.status(200).json({ message: "User already exists" });
    }

    // Insert the new user document
    const newUser = { given_name, email, picture };
    await collection.insertOne(newUser);

    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.setHeader("Access-Control-Allow-Methods", "OPTIONS, POST");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    return res.status(200).json({ message: "User saved successfully" });
  } catch (error) {
    console.error("Failed to save user:", error);
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.setHeader("Access-Control-Allow-Methods", "OPTIONS, POST");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    return res.status(500).json({ message: "Failed to save user" });
  } finally {
    // Close the MongoDB connection
    await client.close();
  }
};

module.exports = saveUser;
