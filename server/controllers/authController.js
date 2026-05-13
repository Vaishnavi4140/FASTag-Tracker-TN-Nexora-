const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/User");

const registerUser = async (req, res) => {
  try {
    
    const { name, email, password, vehicleNumber, phone } = req.body;

    // check if user already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // create user
    const user = new User({
      name,
      email,
      password: hashedPassword,
      vehicleNumber,
      phone,
    });

    console.log("22222222222222");

    await user.save();

    console.log("3333333333333333");

    res.status(201).json({
      message: "User registered successfully",
      user,
    });

  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // find user
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "User not found",
      });
    }

    // compare password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid password",
      });
    }

    // create token
    const token = jwt.sign(
      {
        id: user._id,
        email: user.email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );

    res.status(200).json({
      message: "Login successful",
      token,
      user,
    });

  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};

module.exports = {
  registerUser,
  loginUser,
};