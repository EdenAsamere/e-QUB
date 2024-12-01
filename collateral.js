const mongoose = require("mongoose");

const collateralSchema = new mongoose.Schema(
  {
    user_id: { type: String, ref: "User", required: true },
    equb_id: { type: String, ref: "EqubGroup", required: true },
    collateral_type: {
      type: String,
      enum: ["House", "Land Title", "Vehicle Libre"],
      required: true,
    },
    document_url: { type: String, required: true },
    verified: { type: Boolean, default: false },
    verification_status: {
      type: String,
      enum: ["Pending", "Approved", "Rejected"],
      default: "Pending",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Collateral", collateralSchema);
