const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware'); 

// Purane Routes
router.post('/register', registerUser);
router.post('/login', loginUser);


router.get('/profile', authMiddleware, (req, res) => {
    res.json({ message: "Welcome to your protected profile! ", user: req.user });
});

module.exports = router;