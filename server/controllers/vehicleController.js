const Vehicle = require("../models/Vehicle");

const addVehicle = async (req, res) => {
  try {
    const vehicle = await Vehicle.create(req.body);

    res.status(201).json(vehicle);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getUserVehicles = async (req, res) => {
  try {
    const vehicles = await Vehicle.find({
      user: req.params.userId,
    });

    res.json(vehicles);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  addVehicle,
  getUserVehicles,
};
