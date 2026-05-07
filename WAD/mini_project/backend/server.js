const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Product = require("./models/Product");
const Order = require("./models/Order");

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URL || "mongodb://127.0.0.1:27017/wad_mini_project";

app.use(cors());
app.use(express.json());

mongoose.connect(MONGO_URL)
    .then(() => console.log("MongoDB connected"))
    .catch(error => console.error("MongoDB connection error:", error.message));

app.get("/", (req, res) => {
    res.send("Ecommerce Mini Project API");
});

app.get("/api/products", async (req, res) => {
    const products = await Product.find();
    res.json(products);
});

app.post("/api/products", async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(201).json(product);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

app.get("/api/orders", async (req, res) => {
    const orders = await Order.find();
    res.json(orders);
});

app.post("/api/orders", async (req, res) => {
    try {
        const order = await Order.create(req.body);
        res.status(201).json(order);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Mini project API running at http://localhost:${PORT}`);
});
