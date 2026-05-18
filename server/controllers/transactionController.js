const Transaction = require("../models/TollTransaction");
const User = require("../models/User");



const createTransaction = async (req, res) => {

  try {

    const {
      user,
      vehicleNumber,
      tollName,
      amount,
      transactionType,
      location,
    } = req.body;

    const existingUser = await User.findById(user);

    if (!existingUser) {
      return res.status(404).json({ message: "User not found" });
    }

    const balanceBefore = existingUser.balance;

    if (transactionType === "RECHARGE") {
      existingUser.balance += amount;
    }

    if (transactionType === "TOLL_DEBIT") {

      if (balanceBefore < amount) {
        return res.status(400).json({ message: "Insufficient balance" });
      }

      existingUser.balance -= amount;
    }

    await existingUser.save();

    const balanceAfter = existingUser.balance;

    const transaction = await Transaction.create({
      user,
      vehicleNumber,
      tollName,
      amount,
      balanceBefore,
      balanceAfter,
      transactionType,
      status: "SUCCESS",
      location,
    });

    res.status(201).json({
      message: "Transaction successful",
      transaction,
      balance: balanceAfter
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



const getAllTransactions = async (req, res) => {

  try {

    const transactions = await Transaction.find()
      .populate("user", "name email phone")
      .sort({ createdAt: -1 });

    res.status(200).json(transactions);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }

};



const getTransactionById = async (req, res) => {

  try {

    const transaction = await Transaction.findById(req.params.id)
      .populate("user", "name email phone");

    if (!transaction) {
      return res.status(404).json({ message: "Transaction not found" });
    }

    res.status(200).json(transaction);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }

};



const updateTransaction = async (req, res) => {

  try {

    const updated = await Transaction.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ message: "Transaction not found" });
    }

    res.status(200).json({
      message: "Updated successfully",
      transaction: updated,
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }

};


const deleteTransaction = async (req, res) => {

  try {

    const deleted = await Transaction.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({ message: "Transaction not found" });
    }

    res.status(200).json({ message: "Deleted successfully" });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }

};


module.exports = {
  createTransaction,
  getAllTransactions,
  getTransactionById,
  updateTransaction,
  deleteTransaction,
};