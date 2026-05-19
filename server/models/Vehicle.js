import mongoose from "mongoose";

const vehicleSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
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
    vehicleType: {
      type: String,
      enum: ["CAR", "TRUCK", "BUS", "VAN"],
      default: "CAR",
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


export default mongoose.models.Vehicle || mongoose.model("Vehicle", vehicleSchema);