import mongoose from "mongoose";

const vehicleSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    ownerName: {
      type: String,
      required: true,
    },
    vehicleNumber: {
      type: String,
      required: true,
      unique: true,
      uppercase: true,
      trim: true,
      match: [/^[A-Z]{2}[0-9]{2}[A-Z]{1,2}[0-9]{4}$/, "Please fill a valid vehicle number"],
    },
    mobileNumber: {
      type: String,
      required: true,
    },
    fastagBank: {
      type: String,
      required: true,
    },
    vehicleType: {
      type: String,
      enum: ["CAR", "TRUCK", "BUS", "VAN"],
      default: "CAR",
    },
    category: {
      type: String,
      required: true,
    },

    leaseStatus: {
      type: String,
      required: true,
    },

    tagId: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    fasTagBalance: {
      type: Number,
      required: true,
      default: 0,
      min: [0, "Balance cannot be negative"],
    },
    lastTollDeduction: {
      type: String,
      default: "",
    },

    monthlyTollExpense: {
      type: Number,
      default: 0,
    },

    fleetManager: {
      type: String,
      default: "",
    },
    model: {
      type: String,
      default: "",
    },
    status: {
      type: String,
      enum: ["ACTIVE", "BLACKLISTED", "LOW_BALANCE"],
      default: "ACTIVE",
    },
  },

  {
    timestamps: true,
  }
);


export default mongoose.model("Vehicle", vehicleSchema);
