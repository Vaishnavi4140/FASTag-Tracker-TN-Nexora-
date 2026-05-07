const Transaction = require("../models/TollTransaction");


// CREATE TRANSACTION
const createTransaction = async (req, res) => {
  try {
    const {
      user,
      vehicleNumber,
      tollName,
      amount,
      balanceBefore,
      balanceAfter,
      transactionType,
      status,
      location,
    } = req.body;

    const transaction = new Transaction({
      user,
      vehicleNumber,
      tollName,
      amount,
      balanceBefore,
      balanceAfter,
      transactionType,
      status,
      location,
    });

    const savedTransaction = await transaction.save();

    res.status(201).json({
      message: "Transaction created successfully",
      transaction: savedTransaction,
    });

  } catch (error) {
    res.status(500).json({
      message: "Error creating transaction",
      error: error.message,
    });
  }
};


// GET ALL TRANSACTIONS
const getAllTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find()
      .populate("user", "name email vehicleNumber")
      .sort({ createdAt: -1 });

    res.status(200).json(transactions);

  } catch (error) {
    res.status(500).json({
      message: "Error fetching transactions",
      error: error.message,
    });
  }
};


// GET SINGLE TRANSACTION
const getTransactionById = async (req, res) => {
  try {
    const transaction = await Transaction.findById(req.params.id)
      .populate("user", "name email");

    if (!transaction) {
      return res.status(404).json({
        message: "Transaction not found",
      });
    }

    res.status(200).json(transaction);

  } catch (error) {
    res.status(500).json({
      message: "Error fetching transaction",
      error: error.message,
    });
  }
};


// UPDATE TRANSACTION
const updateTransaction = async (req, res) => {
  try {
    const updatedTransaction = await Transaction.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    if (!updatedTransaction) {
      return res.status(404).json({
        message: "Transaction not found",
      });
    }

    res.status(200).json({
      message: "Transaction updated successfully",
      transaction: updatedTransaction,
    });

  } catch (error) {
    res.status(500).json({
      message: "Error updating transaction",
      error: error.message,
    });
  }
};


// DELETE TRANSACTION
const deleteTransaction = async (req, res) => {
  try {
    const deletedTransaction = await Transaction.findByIdAndDelete(
      req.params.id
    );

    if (!deletedTransaction) {
      return res.status(404).json({
        message: "Transaction not found",
      });
    }

    res.status(200).json({
      message: "Transaction deleted successfully",
    });

  } catch (error) {
    res.status(500).json({
      message: "Error deleting transaction",
      error: error.message,
    });
  }
};


module.exports = {
  createTransaction,
  getAllTransactions,
  getTransactionById,
  updateTransaction,
  deleteTransaction,
};