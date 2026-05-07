const express = require("express");

const {
  createTransaction,
  getAllTransactions,
  getTransactionById,
  updateTransaction,
  deleteTransaction,
} = require("../controllers/tollController");

const router = express.Router();


// CREATE
router.post("/", createTransaction);


// GET ALL
router.get("/", getAllTransactions);


// GET SINGLE
router.get("/:id", getTransactionById);


// UPDATE
router.put("/:id", updateTransaction);


// DELETE
router.delete("/:id", deleteTransaction);


module.exports = router;