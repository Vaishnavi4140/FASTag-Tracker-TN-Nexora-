const jwt = require("jsonwebtoken");
const User = require("../models/User");

const registerUser = async (req, res) => {
  try {
    // check frontend data
    console.log("1111111backend request");
    console.log("111111111111", req.body);
    const { name, email, password, vehicleNumber, phone } = req.body;
     
    const user = new User({
      name,
      email,
      password,
      vehicleNumber,
      phone
    });
    // before database check
console.log("22222222222222");
    await user.save(); // 
console.log("3333333333333333");
    res.status(201).json({
      message: "User registered",
      user
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const loginUser = async (req, res) => {
  const user = { id: 1, email: "test@gmail.com" };

  const token = jwt.sign(user, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  res.json({ token });
};

module.exports = {
  registerUser,
  loginUser,
};