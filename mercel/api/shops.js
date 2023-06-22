const axios = require("axios");

const MONGODB_URI = "mongodb+srv://vishnu:rrr123@cluster0.fczkwxs.mongodb.net/vinkle?retryWrites=true&w=majority";
const DATABASE_NAME = "vinkle";
const COLLECTION_NAME = "Shops";

async function connectToDatabase() {
  try {
    const response = await axios.get(MONGODB_URI);
    console.log("Connected to the database");
    const data = response.data;
    return data;
  } catch (error) {
    console.error("Error connecting to the database:", error);
    throw error;
  }
}

module.exports = async (req, res) => {
  try {
    const data = await connectToDatabase();
    res.status(200).json(data);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Some error" });
  }
};