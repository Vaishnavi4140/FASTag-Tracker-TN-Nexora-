import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

// Routes Imports
import authRoutes from "./routes/authRoutes.js";
import tollRoutes from "./routes/tollRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import vehicleRoutes from "./routes/vehicleRoutes.js"; 

dotenv.config();

console.log("MONGO_URI:", process.env.MONGO_URI);

const startServer = async () => {
  await connectDB();   // wait for DB

  const app = express();
  
  app.use(cors({
    origin: "http://localhost:5173", 
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true
  }));

  app.use(express.json());

  // Routes connections
  app.use('/api/auth', authRoutes);
  app.use('/api/toll', tollRoutes);
  app.use("/api/users", userRoutes);
  app.use('/api/vehicles', vehicleRoutes); 

  app.get("/", (req, res) => {
      res.send("API is running...");
  });

  const PORT = process.env.PORT || 5001;

  app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
  });
};

startServer();