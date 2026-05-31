const express = require("express");

const {
  addVehicle,
  getUserVehicles,
} = require("../controllers/vehicleController");

const router = express.Router();

router.post("/add", addVehicle);

router.get("/user/:userId", getUserVehicles);

module.exports = router;