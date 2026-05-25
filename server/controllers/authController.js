const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/User");

const registerUser = async (req, res) => {

  try {

    const { name, email, password, phone } = req.body;

    
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

  
    const hashedPassword = await bcrypt.hash(password, 10);


    const user = new User({
      name,
      email,
      password: hashedPassword,
      phone,
    });

    console.log("Creating user...");

    await user.save();

    console.log("User saved successfully");

    res.status(201).json({
      message: "User registered successfully",
      user,
    });

  } catch (err) {

    console.log(err);

    res.status(500).json({
      error: err.message,
    });

  }
};

const loginUser = async (req, res) => {

  try {

    const { email, password } = req.body;

  
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "User not found",
      });
    }

 
    const isMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid password",
      });
    }


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

    console.log(err);

    res.status(500).json({
      error: err.message,
    });

  }
};

module.exports = {
  registerUser,
  loginUser,
};