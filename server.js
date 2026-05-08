const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Item = require("./models/Item");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/lostfound")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.get("/", (req, res) => {
    res.send("Server Running");
});

app.post("/items", async (req, res) => {
    const item = new Item(req.body);
    await item.save();
    res.json(item);
});

app.get("/items/search/:keyword", async (req, res) => {
    const keyword = req.params.keyword;

    const items = await Item.find({
        $or: [
            { title: { $regex: keyword, $options: "i" } },
            { description: { $regex: keyword, $options: "i" } },
            { category: { $regex: keyword, $options: "i" } }
        ]
    });

    res.json(items);
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});
