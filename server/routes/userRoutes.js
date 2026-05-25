const express = require("express");

const router = express.Router();

const {
  getAllUsers,
  getUserById,
  getUserBalance,
} = require("../controllers/userController");


router.get("/", getAllUsers);


router.get("/:id/balance", getUserBalance);


router.get("/:id", getUserById);

module.exports = router;
