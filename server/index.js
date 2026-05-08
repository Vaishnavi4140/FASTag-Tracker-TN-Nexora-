const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");


dotenv.config();

console.log("MONGO_URI:", process.env.MONGO_URI);

const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const tollRoutes = require("./routes/tollRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();

connectDB();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/transactions", tollRoutes);
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("API running");
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});