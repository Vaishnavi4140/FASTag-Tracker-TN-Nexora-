const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema(
{
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    // Validation: Added match to ensure proper Indian Vehicle Number format
    vehicleNumber: {
        type: String,
        required: true,
        uppercase: true,
        trim: true,
        match: [/^[A-Z]{2}[0-9]{2}[A-Z]{1,2}[0-9]{4}$/, 'Please fill a valid vehicle number']
    },
    //  Categorizing vehicles for toll analytics
    vehicleType: {
        type: String,
        enum: ['CAR', 'TRUCK', 'BUS', 'VAN'],
        default: 'CAR',
    },
    tollName: {
        type: String,
        required: true,
        trim: true,
    },
    // Validation: Ensure amount is never negative
    amount: {
        type: Number,
        required: true,
        min: [0, 'Amount cannot be negative'],
    },
    balanceBefore: {
        type: Number,
        required: true,
        min: 0,
    },
    balanceAfter: {
        type: Number,
        required: true,
        min: 0,
    },
    transactionType: {
        type: String,
        enum: ['TOLL_DEBIT', 'RECHARGE'],
        default: 'TOLL_DEBIT',
    },
    status: {
        type: String,
        enum: ['SUCCESS', 'FAILED', 'PENDING'],
        default: 'SUCCESS',
    },
    location: {
        type: String,
        default: '',
    },
},
{
    timestamps: true,
}
);

module.exports = mongoose.model("TollTransaction", transactionSchema);