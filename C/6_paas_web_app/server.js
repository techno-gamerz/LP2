const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, "public")));

app.get("/api/students", (req, res) => {
    res.json([
        { rollNo: 1, name: "Amit", course: "Information Technology" },
        { rollNo: 2, name: "Priya", course: "Computer Engineering" },
        { rollNo: 3, name: "Rahul", course: "Information Technology" }
    ]);
});

app.listen(PORT, () => {
    console.log(`PaaS web app running on port ${PORT}`);
});
