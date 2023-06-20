const { MongoClient } = require("mongodb");

const searchSuggestions = async (req, res) => {
  const MONGODB_URI =
    "mongodb+srv://vishnu:rrr123@cluster0.fczkwxs.mongodb.net/vinkle?retryWrites=true&w=majority";
  const DATABASE_NAME = "vinkle";
  const COLLECTION_NAME = "Products";

  const { query } = req.query;

  // Connect to the MongoDB database
  const client = new MongoClient(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await client.connect();
    const db = client.db(DATABASE_NAME);
    const collection = db.collection(COLLECTION_NAME);

    // Perform a search query to find relevant suggestions
    const regex = new RegExp(`^${query}`, "i");
    const suggestions = await collection
      .find({ name: { $regex: regex } })
      .limit(10)
      .toArray();

    // Extract the name field from the suggestions
    const suggestionNames = suggestions.map((suggestion) => suggestion.name);

    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.setHeader("Access-Control-Allow-Methods", "GET");
    return res.status(200).json({ suggestions: suggestionNames });
  } catch (error) {
    console.error("Failed to fetch search suggestions:", error);
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.setHeader("Access-Control-Allow-Methods", "GET");
    return res
      .status(500)
      .json({ message: "Failed to fetch search suggestions" });
  } finally {
    // Close the MongoDB connection
    await client.close();
  }
};

module.exports = searchSuggestions;
