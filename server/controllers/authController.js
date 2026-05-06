const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
  res.json({ message: "Register working" });
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