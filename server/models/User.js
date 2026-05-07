const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        trim: true
    },

    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        lowercase: true,
        trim: true,
        match: [
        /^\S+@\S+\.\S+$/,
        "Please use a valid email address",
        ],
    },

    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [6, "Password must be at least 6 characters"],
    },
    vehicleNumber: { type: String }, // Ye match hona chahiye frontend se
  phone: { type: String }
}, 
{ timestamps: true });

const User = mongoose.model('User', userSchema);
module.exports = User;
