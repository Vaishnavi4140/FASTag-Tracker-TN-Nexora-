const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema(
{
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  ownerName: String,

  vehicleNumber: {
    type: String,
    required: true,
    unique: true,
  },

  mobileNumber: String,

  fastagBank: String,

  vehicleType: String,

  category: {
    type: String,
    enum: ["Private", "Commercial"],
  },

  leaseStatus: String,

  tagId: String,

  fasTagBalance: {
    type: Number,
    default: 0,
  },

  lastTollDeduction: String,

  monthlyTollExpense: Number,

  fleetManager: String,

  model: String,

  status: {
    type: String,
    default: "ACTIVE",
  },
},
{
  timestamps: true,
}
);

module.exports = mongoose.model(
  "Vehicle",
  vehicleSchema
);