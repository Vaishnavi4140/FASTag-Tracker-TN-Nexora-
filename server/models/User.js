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
    
vehicleNumber: {
    type: String,
    required: true,
    uppercase: true,
    trim: true,
    
    match: [/^[A-Z]{2}[0-9]{2}[A-Z]{1,2}[0-9]{4}$/, 'Please fill a valid Indian vehicle number']
},
 phone: {
    type: String,
    required: [true, 'Phone number is required'],
    unique: true, 
    trim: true,
    match: [/^[6-9]\d{9}$/, 'Please enter a valid 10-digit Indian phone number']
 }
},
{ timestamps: true });

const User = mongoose.model('User', userSchema);
module.exports = User;
