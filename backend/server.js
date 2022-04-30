require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const { connectDB } = require("./config/connectDB")


const app = express();

connectDB();

// Configs ...
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan());


// Routes ...
app.use(require("./routes/authRoutes"));
app.use("/api/products", require("./routes/productsRoutes.js"));
app.use("/api/users", require("./routes/usersRoutes.js"));
app.use(require("./routes/authRoutes.js"));

app.get("/", (req, res) => {
    res.send("<h1>This is express app!</h1>");
})

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});