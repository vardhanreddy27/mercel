const mongoose = require("mongoose");

const MONGODB_URI =
  "mongodb+srv://vishnu:rrr123@cluster0.fczkwxs.mongodb.net/vinkle?retryWrites=true&w=majority";
const DATABASE_NAME = "vinkle";
const COLLECTION_NAME = "Shops";

// Database connection
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Shop schema and model
const shopSchema = new mongoose.Schema({
  name: String,
  address: String,
  category: String,
  image: String,
  offer: String,
});

const Shop = mongoose.model("Shop", shopSchema);

module.exports = async (req, res) => {
  try {
    const shops = await Shop.find();
    res.status(200).json(shops);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch shops" });
  }
};
