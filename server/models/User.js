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

    phone: {
        type: String,
        required: [true, 'Phone number is required'],
        unique: true,
        trim: true,
        match: [
            /^[6-9]\d{9}$/,
            'Please enter a valid 10-digit Indian phone number'
        ]
    },
    balance: {
    type: Number,
    default: 0
}

},
{ timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;