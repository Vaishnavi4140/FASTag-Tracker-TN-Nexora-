import express from "express";
import { addVehicle, getUserVehicles } from "../controllers/vehicleController.js";

const router = express.Router();

// Endpoint: POST /api/vehicles/add
router.post("/add", addVehicle);

// Endpoint: GET /api/vehicles/user/:userId
router.get("/user/:userId", getUserVehicles);

export default router;