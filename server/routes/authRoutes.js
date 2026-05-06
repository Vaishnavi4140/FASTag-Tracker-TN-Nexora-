import express from "express";
import { registerUser, loginUser } from '../controllers/authController.js';
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();
const { registerUser, loginUser } = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware'); 

// const {
//     registerUser,
//     loginUser
// } = require('../controllers/authController');

// Routes
router.post('/register', registerUser);
router.post('/login', loginUser);
// router.get('/profile', authMiddleware, getProfile);


router.get('/profile', authMiddleware, (req, res) => {
    res.json({ message: "Welcome to your protected profile! ", user: req.user });
});

module.exports = router;
