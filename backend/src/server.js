const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

const app = express();

app.use(cors());
app.use(express.json());

const taskRoutes = require("./routes/taskRoutes");
const authRoutes = require("./routes/authRoutes");
app.get("/", (req, res) => {
    res.json({
        message: "DevOps Task Manager API is running"
    });
});

app.use("/api/tasks", taskRoutes);
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;

connectDB();

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
// CI/CD pipeline test