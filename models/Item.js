const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
    title: String,
    category: String,
    color: String,
    location: String,
    description: String,
    status: String
});

module.exports = mongoose.model("Item", ItemSchema);
