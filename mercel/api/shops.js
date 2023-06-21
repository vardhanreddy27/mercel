const { MongoClient } = require("mongodb");
const MONGODB_URI =
  "mongodb+srv://vishnu:rrr123@cluster0.fczkwxs.mongodb.net/vinkle?retryWrites=true&w=majority";
const DATABASE_NAME = "vinkle";
const COLLECTION_NAME = "Shops";

async function connectToDatabase() {
  const client = new MongoClient(MONGODB_URI);
  try {
    await client.connect();
    console.log("Connected to the database");
    const database = client.db(DATABASE_NAME);
    const collection = database.collection(COLLECTION_NAME);
    const data = await collection.find().toArray();
    return data;
  } catch (error) {
    console.error("Error connecting to the database:", error);
    throw error;
  } finally {
    await client.close();
    console.log("Disconnected from the database");
  }
}
module.exports = async (req, res) => {
  try {
    const data = await connectToDatabase();
    res.status(200).json(data).header("Content-Type", "application/json");
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};