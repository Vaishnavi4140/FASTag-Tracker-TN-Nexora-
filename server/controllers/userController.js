const User = require("../models/User");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select("-password");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getUserBalance = async (req, res) => {

  try {

    const user = await User.findById(req.params.id)
      .select("name balance");

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    res.status(200).json({
      name: user.name,
      balance: user.balance
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};
module.exports = {
  getAllUsers,
  getUserById,
  getUserBalance,
};